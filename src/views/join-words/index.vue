<script setup>
import { onMounted } from 'vue';
function getRandomAdjective(adjectives) {
    // 从副词数组中随机选择一个副词
    const randomIndex = Math.floor(Math.random() * adjectives.length);
    const selectedAdjective = adjectives[randomIndex];
    // 返回选择的副词和副词数组
    return { selectedAdjective, newIndex: randomIndex };
}

function generateWordCombination(nouns, adjectives, length, position = 0) {
    const result = [];

    // 检查参数是否有效
    if (nouns.length === 0 || adjectives.length === 0 || length < 1 || position < 0 || position > 3) {
        console.error("Invalid parameters.");
        return result;
    }

    // 遍历主词数组
    for (let i = 0; i < nouns.length; i++) {
        const noun = nouns[i];

        // 深拷贝副词数组
        const availableAdjectives = adjectives.slice();

        // 初始化组合词
        let word = "";

        // 存储拼接的副词
        const concatenatedAdjectives = [];

        // 遍历拼接副词
        while (word.length < length && availableAdjectives.length > 0) {
            // 调用方法获取随机副词和副词数组的更新索引
            const { selectedAdjective, newIndex } = getRandomAdjective(availableAdjectives);
            
            // 将副词存入数组
            concatenatedAdjectives.push(selectedAdjective);

            // 拼接副词和主词
            word += selectedAdjective;

            // 从副词数组中移除已选择的副词
            availableAdjectives.splice(newIndex, 1);

            // if (word.length + noun.length > length) {
            //     word = word.slice(0, length - noun.length);
            //     break;
            // }
        }

        // 根据指定位置拼接副词
        switch (position) {
            case 0:  // 开头位置
                word = noun + word.slice(0, length - noun.length);
                break;
            case 1: // 中间位置
                // 选择一个中间位置的副词并将其替换为主词
                const middleIndex = Math.floor(concatenatedAdjectives.length / 2);
                concatenatedAdjectives.splice(middleIndex, 0, noun);

                // 拼接主词和副词数组中的剩余副词
                word = concatenatedAdjectives.join('');
                
                // 如果超过了长度，截取字符串
                if (word.length > length) {
                    word = word.slice(0, length)
                }
                break;
            case 2: // 结尾位置
                word = word.slice(0, length - noun.length) + noun;
                break;
            default: // 随机位置
                // 随机选择一个副词位置并将其替换为主词
                const randomIndex = Math.floor(Math.random() * concatenatedAdjectives.length);
                concatenatedAdjectives.splice(randomIndex, 0, noun);

                // 拼接主词和副词数组中的剩余副词
                word = concatenatedAdjectives.join('');
                break;
        }

        result.push(word);
    }

    return result;
}

// 示例用法
const startingWord = "澳洲杉专用肥";
const nouns = ["异叶南洋杉"]; // 主词数组
const adjectives = [
'植物',
'花草',
'室内',
'园艺',
'育苗',
'通用型',
'盆栽',
'肥料',
'花肥',
'种花',
'树苗',
'盆景',
'花卉',
'养花',
'促生长',
'绿植',
'叶面肥',
'促开花',
'营养液',
'催花',
'水溶肥',
'氮磷钾',
'绿叶',
'有机',
'复合肥',
'颗粒缓释肥',
'阳台',
]; // 副词数组
const length = 30; // 期望字符串长度

onMounted(() => {
    const combinations = generateWordCombination(nouns, adjectives, length, 1);
    console.log(combinations);
})
</script>

<template>
    <div>
        
    </div>
</template>

<style lang="scss" scoped>

</style>