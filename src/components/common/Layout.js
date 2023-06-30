import { useState } from "react";
import FilterContext from "../contexts/FilterContext";
import SubFilterContext from "../contexts/SubFilterContext";


const Layout = ({children}) => {
    const defaultFilters = {
        title: '',
        tags: '',
        locations: '',
    };
    const defaultSubFilters = {
        createdDate: '',
        label: '',
        companyName: [],
    };
    const [filters, setFilters] = useState(defaultFilters);
    const [subFilters, setSubFilters] = useState(defaultSubFilters);

    return (
        <>
            <FilterContext.Provider value={{filters, setFilters}}>
                <SubFilterContext.Provider value={{subFilters, setSubFilters}}>
                    {children}
                </SubFilterContext.Provider>    
            </FilterContext.Provider>
        </>
    );
};

export default Layout;