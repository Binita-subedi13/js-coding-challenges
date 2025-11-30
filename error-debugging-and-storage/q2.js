async function fetchInvalid() {
  try {
    await fetch('https://image.invalid/url');
    return 'OK';
  } catch (e) {
    return 'Failed';
  }
}
fetchInvalid().then(result => {
  console.log(result);
});