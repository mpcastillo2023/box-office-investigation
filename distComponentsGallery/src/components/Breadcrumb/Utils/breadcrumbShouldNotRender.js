const breadcrumbShouldNotRender = (numberOfRemovedPaths, index) => {
    if (numberOfRemovedPaths && index < numberOfRemovedPaths)
        return true;
    return false;
};
export default breadcrumbShouldNotRender;
