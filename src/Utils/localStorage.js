// src/utils/localStorage.js

// Función para guardar un dato en el localStorage
export const saveToLocalStorage = (key, value) => {
    try {
      const valueToStore = JSON.stringify(value); // Convertir el valor a una cadena JSON
      localStorage.setItem(key, valueToStore); // Guardar en localStorage
    } catch (error) {
      console.error("Error al guardar en localStorage:", error);
    }
  };
  
  // Función para obtener un dato del localStorage
  export const getFromLocalStorage = (key) => {
    try {
      const storedValue = localStorage.getItem(key); // Obtener el valor almacenado
      return storedValue ? JSON.parse(storedValue) : null; // Parsear y retornar el valor si existe
    } catch (error) {
      console.error("Error al obtener desde localStorage:", error);
      return null;
    }
  };
  
  // Función para eliminar un dato del localStorage
  export const removeFromLocalStorage = (key) => {
    try {
      localStorage.removeItem(key); // Eliminar del localStorage
    } catch (error) {
      console.error("Error al eliminar desde localStorage:", error);
    }
  };
  
  // Función para verificar si un dato existe en localStorage
  export const isItemInLocalStorage = (key) => {
    return localStorage.getItem(key) !== null;
  };
  
  // Función para limpiar todo el localStorage (opcional)
  export const clearLocalStorage = () => {
    try {
      localStorage.clear(); // Limpiar todo el localStorage
    } catch (error) {
      console.error("Error al limpiar el localStorage:", error);
    }
  };
  