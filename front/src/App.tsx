import { Flex, Box, Grid} from '@chakra-ui/layout'
import CategoryCard from './components/CategoryCard'
import RecipeCard from './components/RecipeCard'
import RecipeForm from './components/RecipeForm'
import RegisterForm from './components/RegisterForm'
import Header from './components/Header'
import Menu from './components/Menu'
import SectionHeader from './components/SectionHeader'
import RecipePage from './pages/Recipe'
import CategoriesPage from './pages/Categories'
import CategoryPage from './pages/Category'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import AddRecipePage from './pages/AddRecipe'
import RecipesPage from './pages/Recipes'
import Router from './router/Router'

const App = () => {
  return (
    <Router/>
  )
}

export default App
