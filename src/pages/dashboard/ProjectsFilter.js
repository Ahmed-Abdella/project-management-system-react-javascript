const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];
export default function ProjectsFilter({ currentFilter, changeFilter }) {
  const handleFilter = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className="project-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((i) => (
          <button
            key={i}
            onClick={() => {
              handleFilter(i);
            }}
            className={currentFilter === i ? "active" : ""}
          >
            {i}
          </button>
        ))}
      </nav>
    </div>
  );
}
