import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import animeUm from 'assets/itens/anime-1.png';
import animeDois from 'assets/itens/anime-2.png';
import animeTres from 'assets/itens/anime-3.png';
import animeQuadro from 'assets/itens/anime-4.png';
import filmeUm from 'assets/itens/filme-1.png';
import filmeDois from 'assets/itens/filme-2.png';
import filmeTres from 'assets/itens/filme-3.png';
import filmeQuadro from 'assets/itens/filme-4.png';
import heroisUm from 'assets/itens/herois-1.png';
import heroisDois from 'assets/itens/herois-2.png';
import heroisTres from 'assets/itens/herois-3.png';
import heroisQuatro from 'assets/itens/herois-4.png';
import seriadoUm from 'assets/itens/seriado-1.png';
import seriadoDois from 'assets/itens/seriado-2.png';
import seriadoQuatro from 'assets/itens/seriado-3.png';
import seriadoTres from 'assets/itens/seriado-4.png';
import desenhoUm from 'assets/itens/desenho-1.png';
import desenhoDois from 'assets/itens/desenho-2.png';
import desenhoTres from 'assets/itens/desenho-3.png';
import desenhoQuatro from 'assets/itens/desenho-4.png';


const initialState = [{
  titulo: 'Yuri Seijin Naoko-san & Misuzu',
  descricao: 'Yuri Seijin Naoko-san é um manga escrito e ilustrado pela autor de mangas chamado Kashmir.',
  foto: animeUm,
  favorito: false,
  preco: 499.99,
  id: uuid(),
  categoria: 'animes'
}, {
  titulo: 'Yukio Okumura Ichiban Kuji B Ao no Blue Exorcist Banpresto',
  descricao: 'Ao no Exorcist, também conhecido no ocidente como Blue Exorcist, é uma série de manga publicada desde 2009.',
  foto: animeDois,
  favorito: false,
  preco: 219.90,
  id: uuid(),
  categoria: 'animes'
},  {
  titulo: 'Dragon Stars Series Dragon Ball Super Bandai',
  descricao: 'Dragon Ball é possivelmente o anime mais conhecido de todos os tempos, uma criação de Akira Toriyama que começou com um mangá.',
  foto: animeTres,
  favorito: false,
  preco: 219.90,
  id: uuid(),
  categoria: 'animes'
}, {
  titulo: 'Shoto Todoroki DXF Boku',
  descricao: 'Em um mundo onde quase toda a população possui algum poder sobre-humano, o garoto Izuku Midoriya é um dos poucos casos de pessoas comuns.',
  foto: animeQuadro,
  favorito: false,
  preco: 320.90,
  id: uuid(),
  categoria: 'animes'
},  {
  titulo: 'Boneco Articulado Leatherface Ultimate Figure',
  descricao: 'Boneco Articulado Leatherface Ultimate Figure - O Massacre da Serra Elétrica - Texas Chainsaw Massacre - NECA.',
  foto: filmeUm,
  favorito: false,
  preco: 329.90,
  id: uuid(),
  categoria: 'filmes'
}, {
  titulo: 'Boneco Articulado Alien Warrior 1986',
  descricao: 'Boneco Articulado Alien Warrior 1986 Blue Ultimate - NECA',
  foto: filmeDois,
  favorito: false,
  preco: 369.90,
  id: uuid(),
  categoria: 'filmes'
}, {
  titulo: 'Jessica Rabbit Reaction Figures Wave 1 ',
  descricao: 'Jessica Rabbit Reaction Figures Wave 1 - Uma Cilada para Roger Rabbit - Who Framed Roger Rabbit - Super7',
  foto: filmeTres,
  favorito: false,
  preco: 290,
  id: uuid(),
  categoria: 'filmes'
}, {
  titulo: 'Roger Rabbit Reaction Figures Wave 1',
  descricao: 'Roger Rabbit Reaction Figures Wave 1 - Uma Cilada para Roger Rabbit - Who Framed Roger Rabbit - Super7.',
  foto: filmeQuadro,
  favorito: false,
  preco: 120.99,
  id: uuid(),
  categoria: 'filmes'
}, {
  titulo: 'Boneco Articulado Man-Bat Megafis DC Rebirth',
  descricao: 'Boneco Articulado Man-Bat Megafis DC Rebirth - DC Multiverse - Mcfarlane Toys',
  foto: heroisUm,
  favorito: false,
  preco: 599.90,
  id: uuid(),
  categoria: 'super herois'
}, {
  titulo: 'Boneco Articulado Batman Arkham City',
  descricao: 'Boneco Articulado Batman Arkham City - DC Multiverse - Mcfarlane Toys ',
  foto: heroisDois,
  favorito: false,
  preco: 369.99,
  id: uuid(),
  categoria: 'super herois'
}, {
  titulo: 'Eternal Clan Dragon Series 8 Mcfarlane Toys',
  descricao: 'Eternal Clan Dragon Series 8 Mcfarlane Toys',
  foto: heroisTres,
  favorito: false,
  preco: 279.75,
  id: uuid(),
  categoria: 'super herois'
}, {
  titulo: 'Mulher-Maravilha',
  descricao: 'Estátua Wonder Woman Mulher-Maravilha ArtFX 1/6 1984 Movie Kotobukiya',
  foto: heroisQuatro,
  favorito: false,
  preco: 149.90,
  id: uuid(),
  categoria: 'super herois'
},  {
  titulo: 'Shane Walsh',
  descricao: 'Shane Walsh TV Series Série 2 Walking Dead Mcfarlan',
  foto: seriadoUm,
  favorito: false,
  preco: 285.56,
  id: uuid(),
  categoria: 'seriados'
}, {
  titulo: 'Lieutenant Commander Data Next Generation Star Trek Universe Collection Playmates',
  descricao: 'Lieutenant Commander Data Next Generation Star Trek Universe Collection Playmates.',
  foto: seriadoDois,
  favorito: false,
  preco: 328.88,
  id: uuid(),
  categoria: 'seriados'
}, {
  titulo: 'Captain Jean-Luc Picard Next Generation Star Trek Universe Collection Playmates',
  descricao: 'Captain Jean-Luc Picard Next Generation Star Trek Universe Collection Playmates.',
  foto: seriadoTres,
  favorito: false,
  preco: 227.68,
  id: uuid(),
  categoria: 'seriados'
}, {
  titulo: 'Khan The Wrath of Khan Star Trek Universe Collection Playmates',
  descricao: 'Khan The Wrath of Khan Star Trek Universe Collection Playmates',
  foto: seriadoQuatro,
  favorito: false,
  preco: 44.90,
  id: uuid(),
  categoria: 'seriados'
},  {
  titulo: 'Tomax Paoli 6 Classified Series G.I. Joe Figure Hasbro',
  descricao: 'Tomax Paoli 6 Classified Series G.I. Joe Figure Hasbro',
  foto: desenhoUm,
  favorito: false,
  preco: 559,
  id: uuid(),
  categoria: 'desenho'
}, {
  titulo: 'Dupla Penn e Teller Simpsons 25',
  descricao: 'Dupla Penn e Teller Simpsons 25 of the Greatest Guest Stars Série 3 NECA',
  foto: desenhoDois,
  favorito: false,
  preco: 417.33,
  id: uuid(),
  categoria: 'desenho'
}, {
  titulo: 'Boneco Cão Bravio Mastim',
  descricao: 'Boneco Cão Bravio Mastim completo Comandos em Ação Gi Joe Estrela',
  foto: desenhoTres,
  favorito: false,
  preco: 199,
  id: uuid(),
  categoria: 'desenho'
}, {
  titulo: 'Boneco Cobra Contrabando de Armas Fora-da-Lei',
  descricao: 'Boneco Cobra Contrabando de Armas Fora-da-Lei Destro completo Comandos em Ação Gi Joe Estrela',
  foto: desenhoQuatro,
  favorito: false,
  preco: 782.91,
  id: uuid(),
  categoria: 'desenho'
}];

const itensSlice = createSlice({
  name: 'itens',
  initialState,
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map(item => {
        if(item.id === payload) item.favorito = !item.favorito;
        return item;
      })
    }
  }
});

export const { mudarFavorito } = itensSlice.actions;

export default itensSlice.reducer;