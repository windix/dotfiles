function sync {
  cd "$(dirname "$0")/.."
  DOTFILES_ROOT=$(pwd -P)

  mkdir -p ${DOTFILES_ROOT}/zsh
  cp ~/.zshrc ${DOTFILES_ROOT}/zsh/zshrc
  cp ~/.p10k.zsh ${DOTFILES_ROOT}/zsh/p10k.zsh

  mkdir -p ${DOTFILES_ROOT}/vim
  cp ~/.vimrc ${DOTFILES_ROOT}/vim/vimrc

  mkdir -p ${DOTFILES_ROOT}/git
  cp ~/.gitconfig ${DOTFILES_ROOT}/git/gitconfig
  cp ~/.gitignore ${DOTFILES_ROOT}/git/gitignore
}

function install {
  cd "$(dirname "$0")/.."
  DOTFILES_ROOT=$(pwd -P)

  cp ${DOTFILES_ROOT}/zsh/zshrc ~/.zshrc
  cp ${DOTFILES_ROOT}/zsh/p10k.zsh ~/.p10k.zsh

  cp ${DOTFILES_ROOT}/vim/vimrc ~/.vimrc

  cp ${DOTFILES_ROOT}/git/gitconfig ~/.gitconfig
  cp ${DOTFILES_ROOT}/git/gitignore ~/.gitignore
}
