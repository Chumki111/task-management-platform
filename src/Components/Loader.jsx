import { HashLoader } from 'react-spinners'
import PropTypes from 'prop-types';
const Loader = ({smallHeight}) => {
    return (
        <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <HashLoader size={100} color='red' />
    </div>
    );
};
Loader.propTypes={
    smallHeight: PropTypes.node
}
export default Loader;