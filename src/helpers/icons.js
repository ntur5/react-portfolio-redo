import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faYinYang,
  faPlus,
  faPlusSquare,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faYinYang, faPlus, faPlusSquare, faPlusCircle);
};

export default Icons;