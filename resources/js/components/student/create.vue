<template>
    <div class="container">
        <el-card>
            <template #header>
                <div class="card-header">
                    <el-page-header
                        @back="goBack"
                        :content="`${scope} form`"
                    ></el-page-header>
                </div>
                <div>
                    <el-form
                        ref="studentForm"
                        :model="form"
                        label="Add Student"
                        content=""
                    >
                        <el-form-item label="Student name" label-position="top">
                            <el-input v-model="form.name" required></el-input>
                        </el-form-item>
                        <el-form-item
                            label="Student email"
                            label-position="top"
                        >
                            <el-input v-model="form.email" required></el-input>
                        </el-form-item>
                        <el-form-item
                            label="Student class"
                            label-position="top"
                        >
                            <el-input v-model="form.class" required></el-input>
                        </el-form-item>
                        <el-form-item
                            label="Student section"
                            label-position="top"
                        >
                            <el-input
                                v-model="form.section"
                                required
                            ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button
                                type="primary"
                                @click="saveForm('studentForm')"
                                >Create</el-button
                            >
                            <el-button>Cancel</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </template>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "student-create",
    mounted() {
        console.log("Component mounted.");
    },
    props: {
        scope: String,
    },
    data() {
        return {
            form: {
                name: null,
                email: null,
                class: null,
                section: null,
            },
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        saveForm(studentForm) {
            this.$refs[studentForm].validate((valid) => {
                if (valid) {
                    this.$store.dispatch("createStudent", this.form);
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
    },
};
</script>
