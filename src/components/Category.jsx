import { Button } from "@heroui/react";

const CategoryPage = ({ onFilter, active }) => {
    const categories = ["All", "Story", "Tech", "Science"];

    return (
        <div className="flex justify-center gap-3 flex-wrap mb-6">
            {categories.map((cat) => (
                <Button
                    key={cat}
                    onPress={() => onFilter(cat)}
                    color={active === cat ? "primary" : "default"}
                    variant={active === cat ? "solid" : "flat"}
                >
                    {cat}
                </Button>
            ))}
        </div>
    );
};

export default CategoryPage;