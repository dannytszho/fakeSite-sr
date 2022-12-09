# https://github.com/typicode/husky/issues/850#issuecomment-774231951
# Windows 10, Git Bash and Yarn workaround
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi