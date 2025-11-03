interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Buttons = ({ children, color = "primary", onClick }: Props) => {
  return (
    <div className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Buttons;
