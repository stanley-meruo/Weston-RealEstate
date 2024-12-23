
const Button = ({ title, link, ...props }) => {
  return (
    <button type={props.type} className={props.className}>
      {title}
    </button>
  );
};

export default Button;