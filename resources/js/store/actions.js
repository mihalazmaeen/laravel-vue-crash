import axios from "axios";
import { ref } from "vue";
import { ElLoading } from "element-plus";
import { ElNotification } from "element-plus";

const fullscreenLoading = ref(false);
const openFullScreen = () => {
    fullscreenLoading.value = true;
    setTimeout(() => {
        fullscreenLoading.value = false;
    }, 2000);
};

export const createStudent = ({ commit }, payload) => {
    openFullScreen();
    axios
        .post("/create-student", payload)
        .then((response) => {
            ElNotification({
                title: "Success",
                message: "This is a success message",
                type: "success",
            });

            setTimeout(() => {
                window.location.href = "/students";
            }, 2000);
        })
        .catch((error) => {
            ElNotification({
                title: "Error",
                message: "This is an error message",
                type: "error",
            });
        });
};
