
export function paginate(items, pageSize, currentPage) {
    return items.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}