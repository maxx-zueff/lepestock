export default function getBreackpoint(size) {
  const breackpoints = [
    { name: "", size: 0 },
    { name: "sm", size: 576 },
    { name: "md", size: 768 },
    { name: "lg", size: 992 },
    { name: "xl", size: 1200 },
  ];

  Array.prototype.hasMin = function (attrib) {
    return (
      (this.length &&
        this.reduce(function (prev, curr) {
          return prev[attrib] < curr[attrib] ? prev : curr;
        })) ||
      null
    );
  };

  const result = breackpoints.filter(function (point) {
    return size >= point.size;
  });

  return result.hasMin(size).name;
}
