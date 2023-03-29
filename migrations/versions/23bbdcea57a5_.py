"""empty message

Revision ID: 23bbdcea57a5
Revises: 
Create Date: 2023-03-25 21:03:01.625623

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '23bbdcea57a5'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('first_name', sa.String(length=80), nullable=False),
    sa.Column('last_name', sa.String(length=80), nullable=True),
    sa.Column('contact_data', sa.String(length=250), nullable=True),
    sa.Column('facebook_profile', sa.String(length=250), nullable=True),
    sa.Column('instagram_profile', sa.String(length=250), nullable=True),
    sa.Column('tiktok_profile', sa.String(length=250), nullable=True),
    sa.Column('identity', sa.String(length=250), nullable=True),
    sa.Column('logo', sa.String(length=250), nullable=True),
    sa.Column('main_color', sa.String(length=250), nullable=True),
    sa.Column('secondary_color', sa.String(length=250), nullable=True),
    sa.Column('aux_color', sa.String(length=250), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('contact_data'),
    sa.UniqueConstraint('email')
    )
    op.create_table('post',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('identity', sa.String(length=250), nullable=True),
    sa.Column('main_text', sa.String(length=250), nullable=True),
    sa.Column('secondary_text', sa.String(length=250), nullable=True),
    sa.Column('price', sa.String(length=250), nullable=True),
    sa.Column('logo', sa.String(length=250), nullable=True),
    sa.Column('formality', sa.Integer(), nullable=True),
    sa.Column('main_color', sa.String(length=250), nullable=True),
    sa.Column('secondary_color', sa.String(length=250), nullable=True),
    sa.Column('aux_color', sa.String(length=250), nullable=True),
    sa.Column('template', sa.String(length=250), nullable=True),
    sa.Column('ratio', sa.String(length=250), nullable=True),
    sa.Column('image_id', sa.String(length=250), nullable=True),
    sa.Column('final_composition', sa.String(length=250), nullable=True),
    sa.Column('contact_data', sa.String(length=250), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('post')
    op.drop_table('user')
    # ### end Alembic commands ###