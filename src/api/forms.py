from wtforms import Form, StringField, TextAreaField, validators

class ContactForm(Form):
    name = StringField('Nombre', [validators.DataRequired()])
    email = StringField('Email', [validators.DataRequired(), validators.Email()])
    subject = StringField('Asunto', [validators.DataRequired()])
    message = TextAreaField('Mensaje', [validators.DataRequired()])