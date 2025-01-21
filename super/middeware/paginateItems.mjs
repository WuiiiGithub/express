const paginateItems = (req, res, next) => {
    try{
        const {page=1, limit = 10} = req.query
        const pageNumber = parseInt(page, 10)
        const pageSize = parseInt(limit, 10)

        req.pagination = {
            skip: (pageNumber -1)* pageSize,
            limit: pageSize,
            pageNumber
        }

        next()
    }catch(err){
        console.error(err)
    }
}
