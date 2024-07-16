import axios from "axios";
import { ref } from "vue";
import { ElLoading } from "element-plus";
import { ElNotification } from "element-plus";

const openFullScreen = () => {
    const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        background: "rgba(0, 0, 0, 0.7)",
    });
    setTimeout(() => {
        loading.close();
    }, 2000);
};

export const createStudent = ({ commit }, payload) => {
    openFullScreen();
    axios
        .post("/create-student", payload)
        .then((response) => {
            ElNotification({
                title: "Success",
                message: "Student Created Successfully",
                type: "success",
                position: "top-right",
            });

            setTimeout(() => {
                window.location.href = "/students";
            }, 2000);
        })
        .catch((error) => {
            ElNotification({
                title: "Error",
                message: "Something went wrong",
                type: "error",
                position: "top-right",
            });
        });
};
