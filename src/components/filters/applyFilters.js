import { dateFormatter, dateWithDifference } from "../../utils/dateUtils";

const createApiPayload = ({filters, subFilters}) => {
    const payload = {};
    // filters
    const title = filters?.title;
    const tags = filters?.tags;
    const locations = filters?.locations;
    // sub-filters
    const companyName = subFilters?.companyName;
    const createdDate = subFilters?.createdDate?.value;
    const label = subFilters?.label?.value;

    if (title?.length) {
        payload['title'] = title;
    }
    if (tags?.length) {
        payload['tags'] = tags;
    }
    if (locations?.length) {
        payload['locations'] = locations;
    }
    if (companyName?.length) {
        payload['companyName'] = companyName;
    }
    if (createdDate?.length) {
        const dayDiff = parseInt(createdDate);
        const computedDate = dateWithDifference(dayDiff);
        // Get date in Mongo Format
        payload['createdDate'] = dateFormatter(computedDate);
    }
    if (label?.length) {
        payload['label'] = label;
    }
    return payload;
};

export const applyFilter = ({filters, subFilters}) => {
    const payload = createApiPayload({filters, subFilters});
    return payload;
};