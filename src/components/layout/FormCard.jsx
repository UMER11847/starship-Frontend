// Conponents
import { Card } from "@mui/material"
// Styling
import "./scss/FormCard.scss"

const FormCard = ({ children }) => {
  return (
    <Card className="form-card" style={{maxWidth: "450px"}} variant="outlined">
        {children}
    </Card>
  )
}

export default FormCard