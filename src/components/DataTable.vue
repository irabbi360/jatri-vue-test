<script>
export default {
    name: 'DataTable',
    props: ['posts'],
    setup() {
        
    },
}
</script>
<template>
    <table>
        <tr>
            <th>#</th>
            <th>Title</th>
            <th>Body</th>
        </tr>
        <tr v-for="(post, index) in posts" :key="index">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
        </tr>
    </table>
</template>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>