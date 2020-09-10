import React from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';


const QUERY_SUPERHEROES = gql`
query {
  superheroes {
    id
    superhero
    secretIdentity
  }
}
`;

const CREATE_SUPERHERO = gql`
mutation createSuperhero ($superhero: String!, $secretIdentity: String!){
  createSuperhero(superhero: $superhero, secretIdentity: $secretIdentity) {
    id
    superhero
    secretIdentity
  }
}
`;


export function SecretInfo() {

  // Polling: rovides near-real-time synchronization with your server
  // by causing a query to execute periodically at a specified interval
  const { data, loading } = useQuery(QUERY_SUPERHEROES, { pollInterval: 500 });
  // should handle loading status
  if (loading) return <p>Loading...</p>;

  return data.superheroes.map(({ id, superhero, secretIdentity }) => (
    <div key={ id }>
      <p>
        Superhero - { id }: { superhero } 
      </p>
      <p>
        Secret Identity - {id}: { secretIdentity }  
      </p>
    </div>
  ));
}

export function CreateSuperhero() {

  let inputName, inputSecretIdentity;
  const [createUser, { data }  ] = useMutation(CREATE_SUPERHERO);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          createUser({ variables: {
              superhero: inputName.value,
              secretIdentity: inputSecretIdentity.value 
          } });
          inputName.value = '';
          inputSecretIdentity.value = '';
          window.location.reload();
        }}
        style = {{ marginTop: '2em', marginBottom: '2em' }}
      >
        <label>Alias: </label>
        <input
          ref={node => {
            inputName = node;
          }}
          style={{ marginRight: '1em' }}
        />

        <label>Secret Identity: </label>
        <input
          ref={node => {
            inputSecretIdentity = node;
          }}
          style={{ marginRight: '1em' }}
        />
        <button type="submit" style={{ cursor: 'pointer' }}>Add a Superhero</button>
      </form>
    </div>
  );

}
