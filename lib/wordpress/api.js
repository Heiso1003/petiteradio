import { useQuery, gql } from "@apollo/client";
// GET HomeContent

export const getHome = gql`
  query Home {
    homepages {
      nodes {
        homePage {
          contentSectionNews
          contentSectionVideo
          description
          fieldGroupName
          idVideo
          methode1
          methode2
          methode3
          titre
          titreSectionNews
          titreSectionVideo
          imageHerobanner {
            sourceUrl
          }
        }
      }
    }
  }
`;

// GET POSTS
export const getPosts = gql`
  query Posts {
    posts(where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        slug
        title
        excerpt
        posts {
          ishighlighted
          date
          sujet
          image {
            sourceUrl
          }
        }
      }
    }
  }
`;

// GET REDIFF

export const getRediff = gql`
  query Rediffusions {
    rediffusions {
      nodes {
        slug
        title
        rediffusionContent {
          animateur
          description
          idVideo
          emission
          imageMiseEnAvant {
            sourceUrl
          }
        }
      }
    }
  }
`;

// GET MEMBRE

export const getMember = gql`
  query Member {
    membres {
      nodes {
        membreContent {
          nom
          role
          photo {
            sourceUrl
          }
        }
      }
    }
  }
`;

//GET ALL REDIFF WHITH SLUG

export const getReddifBySlug = `{
  rediffusions {
    nodes {
      slug
    }
  }
}`


// POST BY SLUG

export const reddifBySlug = `query PostsBySlug($id: ID!) {
  rediffusion(id: $id, idType: DATABASE_ID) {
    id
    title
    slug
    rediffusionContent {
      animateur
      description
      idVideo
      emission
      imageMiseEnAvant {
        sourceUrl
      }
    }
  }
}`

// GET HORAIRE

export const getHoraire = gql`query HoraireType {
  horaires {
    nodes {
      horaireContent {
        jour
        nom
        heureDeDebut
        heureDeFin
      }
    }
  }
}`