FROM fusuf/whatsasena:latest

RUN git clone https://github.com/ussanna-epa-uba-left/musical-lamp /root/CyberQueen
WORKDIR /root/CyberQueen/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "CyberQueen.js"]
