<template>
    <div class="nav-list-wrapper">    
        <div class="nav-item-box" v-for="item in navList" :key="item.name" @click="$router.push(item.url)">
            {{ item.name }}
        </div>
    </div>
</template>

<script setup>
const navList = [
    {name: "主页",url: "/"},
    {name: "home页",url: "/home"},
    {name: "about页",url: "/about"},
]
</script>

<style scoped lang="less">
.nav-list-wrapper {
    display: flex;
    padding: 10px;
    .nav-item-box {
        cursor: pointer;
        margin-left: 4px;
        padding: 6px;
        &:hover {
            background-color: beige;
        }
    }
}
</style>