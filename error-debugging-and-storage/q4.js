function setStorages() {
  const obj = { theme: 'dark', logged: true };
  localStorage.setItem('data', JSON.stringify(obj));
  sessionStorage.setItem('data', JSON.stringify(obj));
}

setStorages(); 
const result = JSON.parse(localStorage.getItem('data'));
console.log(result.theme); 