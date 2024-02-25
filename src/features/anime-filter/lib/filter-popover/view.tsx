import { FC, useCallback } from "react";
import { FilterPopoverProps } from "./types";
import { Button, List, ListItem, Popover } from "@mui/material";
import { FilterType } from "../../types";
import { useAnimeFilters } from "@/shared/context/anime-filter";
import { StyledFilterButton } from "./styles";

export const FilterPopover: FC<FilterPopoverProps> = ({
  open,
  onClose,
  filters,
  anchorEl,
  type,
}) => {
  const { setGenres, setYears, setStatuses, genres, statuses, years } =
    useAnimeFilters();

  const activeFiltersMapping = {
    genre: genres,
    year: years,
    status: statuses,
  };

  const activeFilters = activeFiltersMapping[type];

  const filterFunctionMapping = {
    genre: setGenres,
    year: setYears,
    status: setStatuses,
  };

  const filterValuesMapping = {
    genre: filters.genres,
    year: filters.years,
    status: filters.statuses,
  };

  const filterValues = filterValuesMapping[type];

  const filterFunction = filterFunctionMapping[type];

  const handleSetFilters = useCallback(
    (filter: FilterType) => {
      const isSelected = activeFilters.find((item) => filter.id === item.id);

      if (isSelected) {
        const updatedFilters = activeFilters.filter(
          (item) => filter.id !== item.id
        );
        filterFunction(updatedFilters);
      } else {
        filterFunction([...activeFilters, filter]);
      }
    },
    [activeFilters, filterFunction]
  );

  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorEl={anchorEl}
      sx={{ maxHeight: 500 }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <List>
        {filterValues?.map((filter) => (
          <ListItem key={filter.id} onClick={() => handleSetFilters(filter)}>
            <StyledFilterButton
              active={activeFilters.some((item) => item.id === filter.id)}
            >
              {filter.title}
            </StyledFilterButton>
          </ListItem>
        ))}
      </List>
    </Popover>
  );
};
