<template>
    <div>
        <input type="text" :placeholder="placeholder" v-model="search">
    </div>
</template>

<script>
    export default {
        name: "Search",
        props: {
            placeholder: {
                type: String,
                default: 'fund me'
            },
            searchValue: {
                type: String
            }
        },
        data() {
            return {
                search: this.searchValue
            }
        },
        watch: {
            search(val) {
                this.$emit('searchUpdate', val)
            }
        }
    }
</script>

<style scoped>

</style>