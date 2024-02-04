import PropTypes from "prop-types";

const ContainerCard = ({ children }) => {
  return (
    <div className="flex gap-6 p-4 flex-wrap content-center justify-center">
      {children || null}
    </div>
  );
};

ContainerCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerCard;
