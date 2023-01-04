import { modal } from "./nodes.js";

export const openModal = () => {
    modal.style.clipPath = "circle(70.7% at 50% 50%)";
    modal.style.transition = ".5s ease-in-out";
}

export const closeModal = () => {
    modal.style.clipPath = "circle(0% at 50% 50%) ";
    modal.style.transition = ".5s ease-in-out";
}


