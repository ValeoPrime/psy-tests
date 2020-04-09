export function   createControl(config, validation) {
 return {
     ...config,
     validation,
     valid: !validation, // Если передали что то в валидацию значение по умолчанию будет false

 }
}