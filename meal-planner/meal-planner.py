import random



class Meal:
    def __init__(self, name, ingredients):
        self.name = name
        self.ingredients = ingredients



Meals = [
    Meal('Chicken Piccata', ['spaghetti', 'chicken', 'lemon juice', 'butter', 'capers', 'parsley', 'white wine', 'flour', 'cayenne pepper', 'oil']),
    Meal('Spaghetti Bolognese', ['spaghetti', 'oil', 'mince beef', 'onion', 'garlic', 'canned chopped tomatoes', 'oregano', 'parsley', 'thyme', 'red pepper flakes', 'basil', 'rosemary']),
    Meal('Creamy Lemon Penne', ['penne', 'garlic', 'oil', 'lemon juice', 'heavy cream', 'butter', 'oregano', 'parmesan cheese']),
    Meal('Frozen Pizza', ['frozen pizza']),
    Meal('Pasta Bake', ['penne', 'pasta bake sauce', 'shredded mozzarella cheese']),
    Meal('Pulled Pork', ['pork shoulder', 'garlic powder', 'cayenne pepper', 'paprika', 'apple cider vinegar', 'hamburger buns', 'bbq sauce']),
    Meal('Burgers', ['hamburger patties', 'hamburger buns', 'ketchup', 'mustard', 'burger sauce', 'chips']),
    Meal('Pasta Primavera', ['oil', 'butter', 'garlic', 'onion', 'bell peppers', 'penne', 'lemon juice', 'chicken broth', 'parmesan cheese'])
]


def meal_picker (meals) :
    weeks_meals = []
    while len(weeks_meals) < 5:
        daily_meal = random.choice(meals)
        if daily_meal not in weeks_meals:
            weeks_meals.append(daily_meal)
    for meal in weeks_meals:
        print(meal.name)
        print(meal.ingredients)
        

meal_picker(Meals)