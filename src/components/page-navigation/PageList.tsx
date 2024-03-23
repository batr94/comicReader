import { useSelector } from "react-redux";
import { FaCaretUp } from "react-icons/fa";
import usePageInfo from "../../hooks/usePageInfo";
import { RootState } from "../../store";

// https://react.dev/reference/react-dom/components/select
function PageList() {
  const { currentPage, pageList } = useSelector((state: RootState) => state.pageInfo);
  const { setPage } = usePageInfo();

  return (
    <label className="page-list">
      <span className="page-list__label">
        Page {currentPage + 1} / {pageList.length}
      </span>
      <FaCaretUp />
      <select
        className="page-list__select"
        value={currentPage}
        onChange={(event) => setPage(parseInt(event.target.value))}
      >
        {[ ...pageList.keys() ].map((index) => (
          <option key={index} value={index} className="page-list__select-item">
            Page {`${index + 1} / ${pageList.length}`}
          </option>
        ))}
      </select>
    </label>
  );
}

export default PageList;
