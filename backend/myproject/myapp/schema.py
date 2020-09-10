from graphene_django import DjangoObjectType
import graphene
from myapp.models import SuperHeroModel


class UserType(DjangoObjectType):
    class Meta:
        model = SuperHeroModel


class Query(graphene.ObjectType):
    superheroes = graphene.List(UserType)

    def resolve_superheroes(self, info):
        return SuperHeroModel.objects.all()


class CreateSuperHero(graphene.Mutation):
    id = graphene.Int()
    superhero = graphene.String()
    secret_identity = graphene.String()

    class Arguments:
        superhero = graphene.String()
        secret_identity = graphene.String()

    def mutate(self, info, superhero, secret_identity):
        superhero = SuperHeroModel(superhero=superhero, secret_identity=secret_identity)
        superhero.save()

        return CreateSuperHero(
            id=superhero.id,
            superhero=superhero.superhero,
            secret_identity=superhero.secret_identity,
        )


class Mutation(graphene.ObjectType):
    create_superhero = CreateSuperHero.Field()


schema = graphene.Schema(
    query=Query,
    mutation=Mutation
)
