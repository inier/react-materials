const whiteListProps = [
  'rules',
  'linkages',
  'status',
  'format',
];

export const getDynamicProps = allProps => {
  const keys = Object.keys(allProps);
  const dynamicProps = {};
  keys.forEach(prop => {
    if (whiteListProps.indexOf(prop) === -1) {
      dynamicProps[prop] = allProps[prop];
    }
  });
  return dynamicProps;
};

export const getField = linkages => {
  if (linkages.length === 0) return [];
  const fields = [];
  linkages.forEach(item => {
    fields.push(item.field);
  });
  return fields;
};

export const hasAnyError = errors => {
  return errors.some(item => {
    return item !== 'success';
  });
};
