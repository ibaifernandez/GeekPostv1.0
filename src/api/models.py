from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(80), unique=False, nullable=False)
    last_name = db.Column(db.String(80), unique=False, nullable=True)
    website_url = db.Column(db.String(250), unique=True, nullable=True)
    facebook_profile =  db.Column(db.String(250), nullable=True)
    instagram_profile =  db.Column(db.String(250), nullable=True)
    tiktok_profile =  db.Column(db.String(250), nullable=True)
    business_name =  db.Column(db.String(250), nullable=True)
    post = db.relationship('Post', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "website_url": self.website_url,
            "facebook_profile": self.facebook_profile,
            "instagram_profile": self.instagram_profile,
            "tiktok_profile": self.tiktok_profile,
            "business_name": self.business_name
            # do not serialize the password, its a security breach
        }

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    identity = db.Column(db.String(250), nullable=True)
    main_text = db.Column(db.String(250), nullable=True)
    secondary_text = db.Column(db.String(250), nullable=True)
    price = db.Column(db.String(250), nullable=True)
    logo = db.Column(db.String(250), nullable=True)
    formality = db.Column(db.Integer, nullable=True)
    main_color = db.Column(db.String(250), nullable=True)
    secondary_color = db.Column(db.String(250), nullable=True)
    aux_color = db.Column(db.String(250), nullable=True)
    template = db.Column(db.String(250), nullable=True)
    ratio = db.Column(db.String(250), nullable=True)
    image_id = db.Column(db.String(250), nullable=True)
    final_composition = db.Column(db.String(250), nullable=True)
    contact_details = db.Column(db.String(250), nullable=True)
        
    def __repr__(self):
        return '<Post %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "identity": self.identity,
            "main_text": self.main_text,
            "secondary_text": self.secondary_text,
            "price": self.price,
            "logo": self.logo,
            "formality": self.formality,
            "main_color": self.main_color,
            "secondary_color": self.secondary_color,
            "aux_color": self.aux_color,
            "template": self.template,
            "ratio": self.ratio,
            "image_id": self.image_id,
            "final_composition": self.final_composition,
            "contact_details": self.contact_details
        }
