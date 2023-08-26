// export default function validarNombreReceta(nombre) {
//   // Expresión regular que valida que el nombre tenga al menos 3 caracteres y no contenga caracteres especiales
//   const nombreRegex = /^[a-zA-Z0-9 ]{3,}$/;
// }

// export default function validarNumero(numero) {
//     if (!numero) {
//       return "You must select the health score";
//     } else if (isNaN(numero)) {
//       return "Select the Health Score";
//     }
//     return true;
//   }

//   export default function validarResumen(resumen) {
//     const regex = /^[a-zA-Z0-9\s]+$/;
//     if (!resumen || resumen.length < 10 || resumen.length > 300) {
//       return false;
//     }
//     if (!regex.test(resumen)) {
//       return false;
//     }
//     return true;
//   }

//   export default function validarFoto(url) {
//     // Expresión regular para validar una URL de Google
//     const regex = /^https?:\/\/(?:[a-z\d-]+\.)?googleusercontent\.com\/.+$/;

//     // Verificar si la URL es válida
//     if (!regex.test(url)) {
//       return false;
//     }

//     // Obtener la extensión de la imagen en la URL
//     const extension = url.split('.').pop().toLowerCase();

//     // Verificar si la extensión es válida
//     if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png' && extension !== 'gif') {
//       return false;
//     }

//     return true;
//   }

//   export default function validarDietas(selections) {
//     if (selections.length < 1) {
//       console.log("Debe elegir al menos un componente");
//       return false;
//     } else if (selections.length > 1) {
//       console.log("Hola! Solo puede elegir un componente");
//       return false;
//     }
//     return true;
//   }
