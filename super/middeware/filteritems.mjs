const filterItems = async (req, res, next) => {
    try {
        const { category, minPrice, maxPrice } = req.query;

        // Build the filter object
        const filter = {};
        if (category) filter.category = category;
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = parseFloat(minPrice);
            if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
        }

        req.filter = filter;
        next();
    } catch (error) {
        res.status(500).json({ message: 'Filtering error', error });
    }
};

export default filterItems
