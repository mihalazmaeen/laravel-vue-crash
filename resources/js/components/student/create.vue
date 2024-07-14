<template>
    <div class="container">
        <el-card>
            <template #header>
                <div class="card-header">
                   <el-page-header @back="goBack" content=""></el-page-header>
                </div>
            </template>
           <el-form ref="studentForm" :model="form">
            <el-row :gutter="10">

            </el-row>

           </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
