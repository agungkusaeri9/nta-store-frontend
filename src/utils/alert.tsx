import Swal from "sweetalert2";

interface Props {
  isRedirect?: boolean | undefined;
}
export const showDevAlert = ({ isRedirect = true }: Props = {}) => {
  Swal.fire({
    title: "Sedang Dalam Pengembangan",
    text: "Fitur atau halaman ini belum tersedia, tunggu update selanjutnya ya.",
    icon: "info",
    confirmButtonText: "Mengerti",
    buttonsStyling: false,
    customClass: {
      confirmButton:
        "bg-blue text-white px-5 py-2 rounded-md font-medium hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-blue/50",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      if (isRedirect) window.location.href = "/";
    }
  });
};
