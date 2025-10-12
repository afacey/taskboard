import Swal from "sweetalert2";

export function showErrorAlert(message: string) {
  Swal.fire({
    title: "Oops!",
    text: message,
    icon: "error",
    confirmButtonText: "OK",
  });
}
