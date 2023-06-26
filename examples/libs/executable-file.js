module.exports = function yearsInMs(options, loaderContext, content) {
  console.log(content, "content");
  const { years } = JSON.parse(content);
  const value = years * 365 * 24 * 60 * 60 * 1000;

  const obj = {
    val: value,
  };
  return {
    cacheable: true,
    code: JSON.stringify(obj),
  };
};
