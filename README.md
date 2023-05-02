<h1 align="center">
  Cuida Icons
</h1>

<div align="center">
  <p align="center">Open source icon library for Cuida Design System</p>
  <p align="center">https://cuida.framer.wiki/icons</p>
</div>

## Instalando

- O Cuida icons pode ser instalado com o npm:

```bash
npm i @sysvale/cuida-icons;
```

## Usando

- O Cuida Icons pode ser utilizado com o componente de ícones do Cuida ou livremente em outro framework ou aplicação

## Desenvolvendo

### Configurando o projeto

- Clone o repositório:

```bash
git clone https://github.com/Sysvale/cuida-icons.git
```

- Instale as dependências com:

```bash
npm i
```

## Contribuindo

Para contribuir com o Cuida Icons siga os passos:
- Partindo do Design Kit do Cuida, exporte os novos ícones com o [plugin](https://www.figma.com/community/plugin/814345141907543603/SVG-Export) com o preset `CuidaIcons`;
- Extraia o zip gerado pelo plugin no diretório `svg-icons` do Cuida Icons;
- No package.json do Cuida Icons, atualize a versão da lib;
- Delete a pasta dist do Cuida Icons, caso ela exista localmente;
- Execute o comando `npm run build:library` para buildar o pacote;
- Publique no NPM com `npm publish`;

- Obs.: para usar os novos ícones no Cuida, basta atualizar a versão do Cuida Icons no package.json do Cuida e adicionar os nomes dos novos ícones no arquivo `iconsData.js`
