import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Error from "./Error";
import "./Login.css";
import { useForm } from "react-hook-form";

function Login({ clickHandlerLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  var avatar =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUFBcVFRQXFxcZGhwaFxcaGhcZGhcdGBkZIxoZFxkaICwjGhwoHRkaJTUlKC0vMjIyGSI4PTgxPCwxMi8BCwsLBQUFDwUFDy8bFRsvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAOAA4AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcFBggCAwT/xAA+EAACAAMFBQUFBwMEAwEAAAABAgADEQQSITFBBQYiUWEHMnGBkRNCUmKhFCNygqLR8JKxwSQzQ1MWc7IV/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALeVbuJg63sR4QV72B+kGa7gPHGAlmBFBn+0EN3AwK3RUZ/vEIL2J+kBAWhvaZ+sS4vZaRAapu6ZdcIljdy15wE3hS7rlEJw56wagBcmlBUk4Ac69IrjertYs0iqWYC0zB7wNJS+L5v+XD5oCxm+LQYk9BGp7f7Rtm2aqmf7Vx7kke0PhercB6FoojeHfC220kTpzXNJScEsfkHe8WqesY/ZeyLRaWuSJMyYdbikgV+I5KOpgLN2n21TKFbNZUUaPNYuSPwJdAP5jGpW3tJ2pMJ/1JQH3ZaIlPAgXvrGb2P2O26aA06ZLkLyr7Vx+VOH9Ubbsvsbsa09rOnTCBjS5LU+QBYf1QFNT94LY/ftdof8U6Yf7tH4Zs92xZmbxJP946Rkdm+ypZwsisebvMf6F6fSMj/4Xs1RhYbOfGWh/uIDl2VPdcVZl8CR/aP3SN4LYnctdoT8M2YP7NHSn/hezWGNhs48JaD+wjHT+zfZUw42RVPNHmJ9A9PpAUzYu0naksj/AFJcD3ZiI9fEkXvrG2bM7aptAtpsqONWlMUI/K94E+YjObU7G7G1fZTp0skYVuTFHkQGP9Ualtjsdt0oFpMyXPXlX2Tn8r8P6oCy9gdo2zbTRRP9k59ycPZnwvVuE9A0bavxZjMHoY5M2psi0WZrs+TMlnS+pANPhOTDqIyG7++FtsVBJnNc1lPxyzz4D3fFaHrAdSPxZaRN7C7rlFb7q9rNln0S0gWaYfeJrJY9HzT82HzRY60Ivg1qKgg1B8OkAThz1iCpJvaZ+kSpvZ6coFqG7pl6wEsb2UFYAUOcGF3EfWCreFTn+0BCrdxMGW9iIK17A+OEGa7gICWYHAZ+kFIXA5+sCl3ERAW9ifCAKpBqcoOL3d/aAa9w/wAwgTdwEBJYEUGcYTeTeezbPl37Q+J7ksULuRmEXzFSaAVzjD7+78StmpdWky1OKpL91K+/MpiF5DNumJHPm19qzrVNadPmGZMbMnTkqgYKo0AwgM/vhv7a9oMVZvZSNJKE3fF2oDMPjhhgBGL3e3YtVue7Z5RYDvOcJafjc4A9MzoDG+bjdlbzbs63Bpcs4rIFVmP/AOw5yx0734dbostkl2dFlykVEGCooCqPADxgK73b7JLLJo1qY2iZ8AqkpToKDifHmQDqIsWx2WXJUIiJLQYKiKFUeCrgI+133vP0iFN7A6QBlJNRlEub2C/tEFqcP8xiWW7iPCAKwAoc4hQRicvWJC3sYgNewMAYFsRl6RLMCKDOILXcBElbuMAQ3cG/eIVSDU5RKrexPhEBq8P8wgPlbLLLnKUdEmIcGR1DKfFWwMV1vJ2SWWcC1lY2eZ8BvPKY8qHiTHkSBoIspjdwGsTcpxa5+sBypvDuxarC920SioPdcYy3/A4wJ6ZjUCMpufv5atnsFU+1kayHJu+KNQlD4YY4gx0harJLtCNLmorocGRgGU+IMUvvz2VvKvTrCGmSxUtINWmJ/wCs5zB0734tAtPdveezbQl37O+Ip7SWaCZLJyDDlgaEVBpGcDAChzjknZO1J1lmrOkTDLmLkR9VYHBlOoOEdB7hb8ytopdaiWpBV5fuvT35dcSOYzXqKEhuSC73v3gykmoygDewMC13h/mMBLENgM/SCsAKHOBW7iPCAS9iYDygI72XWDAnu5dMIkPewygWu4Z6wEkgigzjTO0HfZNmyrq0e1OPukONwZe0mfLUGg94joSMxvZt+Xs+zPaHN45S0rQu5BuqDoNSdADHMm2NqTbVOefOa9Mc1J5clUaKBQAchAeJ86baJxZy02bMbE4s7sxoAAMzWgAHQCLw7O+zhbIFtFpUPaTiqYFZHKmjTPmyGnMuy7cNbIq2m0JW0uOFT/wKRlT/ALCMzoDTnWyCbnWsBNRSnvf5iEw73lXGFz3vOkBxdKf5gIINa+79KRLY936YQvU4fKvjDudawEqRShz/AJSIXDvZdcY/BtjasiyyzPtEwS0HPMnRVAxZjTIRTe9Xa9aJxKWNfYJ/2MFaY3UA1VNeZ6iAu212hJYvu6onxMwRfViBGGtO+2zFw+2yK/K4b6rWOZLbb5s5r06a8xvidmc+rGPywHUtm322Y2H22RX5nC/VqRmbJaUmC+jq6fErB16YqSI5Bj9Vit82S16TNeW3xIzIfVTAdctU93LphHpiKUGcUZur2vWiUQlsX26f9igLNXqQKK+nI9TFybH2pItUsT7PMWYh1GYOqsDirCuRxgP3Kad764xABrX3fpSJ7/SkL1eHyr4QBse750wiailPe+tYg8PWv+IXPe86QFb9onZwtrDWizKEtObJgFn866LM+bI68xR8idNs80MpaVNltgcVZGU4gg5EGoIPUGOuAb/SkVv2obhi1q1ps6f6lBxqP+dQOX/YBkdQKcqBluz7fZNoyrrUW1IPvUGF8Ze0l/LUio90nkQTuakAUOcck7H2pNss5J8lrsxDUHQ81YaqRUEcjHTe6e35e0bMloTA92YlalHAF5SdRqDqCIDMqCO9l1xgwJ7uXTCJDXsMtYm/dwzgD0pw59IgMACWIFMSToBrU6ZxNy7jnFb9s28vsLKLMhpMtAIbmsod7+om74X4CsO0Xeo7QtZKsfYSqpJHTC856sQD4BRpG0dj+5vtWFunJWXLakhSO+6nF/BTgPm/DGh7p7Ce3WqXZ1wDGrt8EtcXbxplzJA1jqSxWZLPLSVLUBEUKijQKKAdfGA+5pTDvfWCfN5ViLtOLzp4wpe6U84CMa/L9KR6f5fOkRf93yrDu9a/4gJFKfN9axiN49vSrDIefPPCMFX3pjmtEUHU0PgATpGWue9Xr6dY5u7S96jb7W1xvuJJKSRo3xTOt4jDoF6wGJ3p3ln7QnGbObAVEtB3Jan3VHpU5mMFCEAhCEAhCEAjO7r7yz9nzhNkmoNBMlnuTVGjDnnQ5j1rgoQHV27u3pVukJPs54Tgy+9LcUqjgaio8QQcjGXNKfN9axzb2Z71mwWpQ7fcTSEmg5LjwzOl0nH5S3SOkbvvedPHrASnzeVY841+X6Uie90p/mF/3fKsBL/L50gKUx7316RHc61hdrxedPCApHtg3N9k5t0laS5jUnqB3JjHBx0Y4H5vxYav2db0nZ9rDMx9hNok8dKm646qST4FhrHR9tsyWiW8qYoKOpV1OoYUI6eMcub2bCew2uZZ2qQpqjfHLOKN40z5EEaQHVRYEAqQa4gjUHWo0yiUpTiz6xW/YzvL7eymzOazLOAF5tKPd/pIu+FyLIuXscoDze+LAak4COXN9tuG222bOB4L1yUOUtME8K949WMXv2obb+zbNnFTR5lJKY41mVvU6hA58hHO+xdnNabRKkLnMdUrnQE4t4AVPlAXX2L7viTZWtbD7yeaJzWUhoKa8TAnqApiy1+b6x8LJZFky0RAAktVRFGiqAFHpSPtS9jlAQCa4936RLYd3zpjE3q8PlXwiBwdawE4U+b61iFx73lXCF33vOB4ulP8wGpdp22TZdnTmU0aZSTLIwxmVvEHmEDnxEc0Rc3b3ayFskkZVmO3UqECn0Z/WKZgEIQgEIQgEIQgEIQgEdL9me2TatnSWY1aX91MJNcZdApJ5lChNecc0Rc/YJbCUtck5Bpbr4sHDf8AwkBbrYd3zpjE0FPm+tYgcPWv+IXPe86QBce95VwiCTXDu/SJ7/SkTepw+XrAGw7v0itO2jYAnWVbWo+8kGj82lOaGoz4WIPQFzFlUu45x8bXZFnS3RwCkxWR1OqsCGHpWA5h3J24bFbZU4ngvXJo5y3wfDWneHVRHUd74cRoRiPWOS9tbOazWibIbOW7JXmAcG8CKHzjojsv239p2bJLGry6yXx1l0u1rqUKHzMBonbztIe0s1mU4KrTXGhLm6leoCP/AFRjew/ZQm215zAFZMs06PN4V/T7SML2qWszNqWjGoQrLXpcRQR/Veix+wzZ12xzZtADMm0rzWWop+pngLNUkmhygxp3f3iS17h/mEFN3A/SAEClRn/NIhce95aQC04tM/WDcWWnOAVNaaf48YNh3fPWJvYXdcoheHPXl0gKW7e1PtrIecuZ6hl/cRUkXl277PLWaRaAP9uYyHoJqg1PnLA/NFGwCEIQCEIQCEIQCEIQCLb7BFPtLYeSS/Us/wCxipIvDsHsF2z2i0H35ioOolKTUecz6QFqJj3vLSFTWmn+PGDcWWnPrE3sLuuUBD4d3z1iQBSpz/mkQou568oFa8WmfpAFNe9+0GJBoMoljewH1gGu8P8AMYChe3HZQlW5JygBZ8sV6vL4T+j2cZHsG2iPaWmzMcGVZqjQFDdenUh0/pjOduezr1jlTaAmXNpXksxTX9SJFb9ldrMvalnxoHLS2630ag/quwGC3knX7ZaX+KfNb1mMY6D7LZJl7Ksw1ZXc/nmuR+mkc3WibedmPvMT6msdRbiUXZtjHORLPqoMBnmUAVGcFF7OIC3TU5fvBhexEBAYk3dIl+HKJLVF3XL0iF4c9eUBN0Uva5xCcWekLuN7TODcWWnPrAYfezZAtlknWbDjWik6OpDIa8r4FelY5YnymRmRgVZSVZTmCpoQeoIjsC9QXdcvWKT7ZNzmlv8Ab5S8DkCeB7r5B/BsAfm/FAVNCEIBCEIBCEIBCEID2ikkAAknAAYkk5ACOpdy9jmx2ORZjS8q1mfjclnx1oxIHQCKj7H90GtE4WyYv3UluCuUyYMqdEwNed3rF8lsLuuUBD8OWsTdFL2ucQnDnrC7je0zgCcWcC1Dd0g3FlpEhqC7rl6wBxdxEFUEVOcQou4mIZamoy/aA1LtSkmZsq0jVVRx+SahP6axz5u3OuWyzP8ADPlN6TFMdKb90bZtsHKRMPopMcu2eZddW+FgfQ1gFolXXZT7rEehpHUW4lG2bYzykSx6KBHNe8km5bLSnwz5q+kxhHQfZbOMzZVmOqq6H8k1wP00gNuDXjQ5ftBjdwESzAigzgpu5wArQXtc/WIQXs9IgKQb2kS/FlAL2N3TKDcOWvOJvCl3XKIThz1gJu4Xtc4+U2Us1WR1DIwKspFQwYUIYHMER7Kmt7TOPTG9lAc+doXZ1MsTPOs4aZZczq8no+pTk/keZr2OvrXbZUlC06YktR3mdgq48ycIoHf6bsWYWaxmYJ2NfZIBZ2IIzVypXxQU1oYCv4QhAIQhAI3jcLcCbtBlmPel2YHimUo0ymaywc+V7IdThH33B/8AxFZTbGmGbymqPs4PQISW8XoOkX/ZLRLmS1Mp0dCBcZCpSg+ErhSkB5sdll2eWkqUgREWiqMgB/M9Y/SVwva5xCG7nALje0zgC8WenKF7G7plB+LLSJvCl3XKAh+HLWJAqL2ufpEJw56xBUk3tICVN7AxBa6boy/ePTG9lBWAFDnAYHfui7Nth5yJg9VIjl2zyrzqo95gPU0jpDtSnGXsq0nVgiD881Af01jn3duTftlmT4p8pfWYogM72qWQy9qWjCgcrMXrfRST/VeixuwzaVbHOk1BMubepyWagp+pHjC9vOzh7SzWlRgytKc6AobyV6kO/wDTGL7EdqiVbmkseGfLIH45fEv6b/qIC/Sl3iH8rBRexP0iFUg1OUHFe7+0ADVN3TL0g3DlrziSRSgz/msQuHe8tYCbuF7XOIXiz05Qoa10/wAeEfK22lJaM7OERAWdiboUDUk6QH0aZSoNKDM8hqYrDe/tYlSC0qwhZz5Ga2MpfwUxmHrguWcaZ2g9oky2lpEgtLsowOjz/mmahOSeZ0Ar6AyW2NtWi1v7S0TXmNpeOC1pgijhQYZACMbCEAhCEAhCEAjK7D3htVje/Z5rSzqoxRvxIeFvMRioQF/bm9qMi1lZVqCyJxwVgfuph6E/7bE1wY0yxqaRYwfG7plHHcWh2ddpLWe7ZrWxaScJc04tJ5Bjm0v6rphgAvRuHLXnE3cL2uceJEwEBqghgCpBDAg6gjTKPVDWun+PCALxZ6cogtQ3dMvWJfHu+ekSCKUOf81gIYXcR9YkLe4v5hEKKd794MpJqMoCse3PaVLHJk1AMybepzWUhr+p0iueyuyGZtSz4VCFpjdLiNQ/1XYzHbdtYTbcslTwyJYB/HM4m/Tc9IynYLs0GZabSwwVFlKdCXN56dQET+qA3vtQ2J9p2bOCiry6Tkw1l1vU6lC48xHOuyLe1nnyp6d6W6uMaVukGh6HI9DHW134sRqDiPSOXN9thmxW2bJA4L1+Uect8Ux1p3T1UwHTthtqT5cuYhqkxFdTzDAER963cM4rDsU3i9rZ3sbnjk8Uvm0pjiBqbrk+TqItBfm+uMBF2nF5+sBx9KRArXHu/SJb5fOmEAve75RQfarvr9qmGy2d/wDTy242GU51OddUU5aE448NN/7W96PslkEmWaT54K1HeSWBxtXQmoUeJI7sc8QCEIQCEIQCEIQCEIQCEIQCEIQFr9km+5R0sNpf7tjSRMJ7jE4SzX3GOXI4ZHC7b3u+Ucdx0j2Y70/b7JSYa2iTRJh95xTgmeJAIPzKeYgNz7nWsLteLz9IlPm8qx5INcO79ICa3sMo+FutqSJcyY5oktGdjyCgkx92+X6YRWHbXvF7KzpY0PHO4pnNZStgDqLzgeSMNYCl9r29rRPmzn7012citaXiTQdBkOgjorsv2J9m2bJDCjzKznw1mUu16hAg8jFEbk7DNttsqSRwXr808paYviMq90dWEdR3fhwGlMB6QHq/ewyit+2bdr29lFpQVmWcEtzaUe9/SRe8L8WQ9KcOfSICgghgDXAg6g6UOmcBylu1tqZYrTLtEvEoeJa0DqcHU+Ir4YHSOo9mW6XapMufKasuYoZT0Oh5EGoI0IMc59ou6p2fayqqfYTavIPSovIeqkgeBU6xneyXfT7LM+yTmIkzW+7YnCVMPPkrYDoaHUmAvm9Xh8q+EO71r5RJpTDvfXrGv777TNm2faptSGEsqh1DTOBSPBmB8oDn/f8A279tt06cDVAbkrl7NKgEdGNW/NGtQhAIQhAIQhAIQhAIQhAIQhAIQhAI23s228bHb5TE/dzCJUwaXXIox/C1015AxqUIDsTv9KQvU4fKvjGF3Q2mbVYbNOBqzyxfI+NOF/1K0ZsUpj3vrAfk2nbpdlkvPmtSXLUsx6DQcyTQAakiOW95dtTLbaZlomYFzgtahFGCqOgAHjidY3bta30+1TPsklqyZTfeMDhNmDlzRcQOZqdAYwPZ1uqdoWsKwPsJVHnnpjdQdWII8Ax0gLP7Gd2vYWU2lxSZaACvNZQ7v9RN7wuRZF+7hnEFQAAoApgANANKDTKJSlOLPrALl3HOIK3sctIhCT3susSxI7uXTGAw29mwJe0LM9ncXTnLelSjgG6wGo0I1BMcx7Y2XNss55E5bsxDRhoeTKdVIoQeRjrdgAKjONL7QdyU2lKvLRLUg+6c4Xxn7OZ8tSaH3SepBDWuyrf72oWx2p/vFwkzG/5BpLc/GND7wwz72T7cLWRs5FGF+einwCTG/uqxRFrssyRMZJiskxGoynBlI/mcbDtzfOdbLFKs08XnlPeE2uLrdIAcasK97UZ44kNVhCEAhCEAhCEAhCEAhCEAhCEAhCEAhCEB0D2IWwts5lP/ABznQeBVH/u7Ri+1Xf72Qax2R/vWqJ8xT/tjWWp+M6n3Rhn3a82HvnOsdim2aRwPNmXmm1xRbgUhBox+LQZY4jXrJZZk6YsuWrPMdqKoxLE/zOA+2x9lzbVOSRJW87mijQc2Y6KBUk8hHTe6ewJez7MtnQXiMZj0oXcgXmI0GQA0AEYfs/3KTZ0q+1GtTj71xjcGfs5fy1AqfeI5AAbmoBFTnAQFu456RNy9jlHlST3suuEGJB4cumMB6L3sBANdwPjBlAFRnBBXFs/SAgJd4v5jAi9iIKxJocoObvd/eA03f3caVtFLy0l2pBRJnuvT3JlMSvI5r1FQefNr7KnWWa0mfLMt1zB1GjKcmU6EYR1sVAFRnGE3k3Ys20Jdy0JUityYtA8snMo3LAVBqDTKA5VhG3b37hWvZ5LMvtZGk9Abvg64mWfHDHAmNRgEIQgEIQgEIQgEIQgEIQgEIQgEIRt26G4dr2gwZV9lI1nuDd8EXAzD4YYYkQGA2RsqdapqyZCGZMbIDQaljkqjUnCOg9wtx5WzkvNR7U4o8z3Ur7kuuIXmc26CgGY3b3Ys2z5dyzpQn/cmNQvMIyLHliaAUArGbCgipzgIAu4mBS9xfzCCG93v2gzEGgygDNewHjEh7uBgyhe7n6wRQcTnAQqXcTBlvYjwxgrXsDB2u4DxgJZrwoM/2gpu4H6QZQBUZwQXsTAeQtDe0z9YluLLTnEBiTd0y9Il+HLWANQi4RWooQcQfHpFcb1dk9ln1ezkWaYfdArKbxTNPy4fLFkXcL2ucQnFnpAct7wbn22xVM6S1zSanHLP5x3fBqHpGvx2G3w6HAjoY1Pb/Zzs601YyPZua8ck+zPjdAuE9SsBzRCLd2p2KzACbNakYaLNUoR0vpeBP5RGpW3s12pLJ/0xmAe9LdHr4KDe+kBp8Iyc/d+2J37JaE/FJmD+6x+GbIde8rL4gj+8B8oR9ZUh2wVWbwBP9o/dI3ftj9yyWh/wyph/ssBjIRuFi7NtqTCP9MUB96Y6JTxBN76RtmzOxWZQNabUijVZSlyR+N7oB/KYCo42Dd/c+220gyZLXNZr8Esc+M97wWp6Re2weznZtmowke1ce/OPtD43aXAeoWNsU+7oMAOggK63V7JrLIo9pItMwe6RSSp/Bm/5sPlix1oAEApQUAGAHKnSD8OWsTdwva5wEKLuevKIK1N7TP0iU4s9IgsQbumXrASxvYD6xKtdFDn+8HF3EQVaipzgIVbuJ8MIMl7EfWCNewPjEMxU0EB//9k=";

  function validateForm() {
    if (email.length > 6 && password.length > 6) return true;
    return false;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (email === "abcd1234@gmail.com" && password === "1234567") {
      const user = {
        email: email,
        password: password,
        avatar: avatar,
      };
      clickHandlerLogin(user);
    } else {
      alert("Wrong email or password!");
    }
  }

  useEffect(() => {
    console.log(email);
    if (email.length <= 6 && email.length > 0) {
      setErrorEmail("Length of Email is have to greater than 6 characters");
    } else {
      setErrorEmail("");
    }
    if (password.length <= 6 && password.length > 0) {
      setErrorPassword(
        "Length of password is have to greater than 6 characters"
      );
    } else {
      setErrorPassword("");
    }
  }, [email, password]);

  return (
    <>
      <div className="container">
        <div className="intro-text">
          <h1>Log in</h1>
        </div>
        <Form id="login-form" onSubmit={handleSubmit}>
          <div class="input">
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errorEmail ? (
                <Error error={errorEmail}></Error>
              ) : (
                <Error error=""></Error>
              )}
            </Form.Group>
          </div>
          <div class="input">
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errorPassword ? (
                <Error error={errorPassword}></Error>
              ) : (
                <Error error=""></Error>
              )}
            </Form.Group>
          </div>
          <Button
            block="true"
            size="lg"
            type="submit"
            disabled={!validateForm()}
            className="submit-btn"
          >
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}
export default Login;
