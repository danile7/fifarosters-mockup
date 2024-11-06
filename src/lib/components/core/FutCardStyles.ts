import type {YearLayouts, YearOfLayoutsType, YearType} from '@/lib/types';
import {css} from '@emotion/css';

export const yearOfLayouts: YearOfLayoutsType = {
    '24': css`

      display: flex;

      .player-avatar {
        width: 68.25%;
        height: 46.5%;
        top: 16%;
        left: 21%;
      }

      .player-avatar-dynamic {
        width: 98%;
        top: 2%;
        left: 50%;
        transform: translate(-50%);
      }
      
      .player-avatar-dynamic.mini{
        width: 80%;
        top: 2%;
      }

      .editable-card-player-name {
        font-size: 0.8em;
      }

      .player-name {

        font-size: 0.8em;
        top: 65.6%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
      }

      .total-score {
        left: 21.8%;
        top: 16.2%;
        transform: translate(-50%);

        .player-score {
          font-size: 1.23em;
          line-height: 0.91em;
        }

        .player-role {
          font-size: 0.63em;
          line-height: 1;
        }

        .player-role-mark {
        }
        
        .first-owner{
          margin-top: 23px;
        }
      }

      .chemistry-style{
        width: 24px;
        position : absolute;
        left: 17%;
        top: 29%;
      }

      .feature-score-container {

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        top: 70.6%;
        width: 68.8%;
        left: 50%;
        transform: translate(-50%);

        .splitter-1,
        .splitter-2,
        .splitter-3
        {
          display : none;
        }

        .feature-score-item {
          .feature-score-name {
            font-size: 0.43em;
            line-height: 1;
            margin-bottom: 0.2em;
            font-weight: 700;
          }

          .feature-score-value {
            line-height: 1;
            font-size: 0.72em;
          }
        }
      }

      .n-c-l-group {
        width: 100%;
        gap: 0.4em;
        top: 80.8%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .nation, .league, .club {
          min-width: 0.85em;
          max-width: 0.85em;
        }
      }

      .roles-group {
        width: 12%;
        top: 28.1%;
        right: 1%;
        gap: 0.1em;

        .role {
          width: 100%;
          font-size: 0.42em;
          border-radius: 0.15em;
          border-width: 0.11em;
          padding: 0.3em 0 0.3em 0.1em;
          line-height: 0.7;
          letter-spacing: 0.1em;
        }
      }

      .right-features {
        top: 62.2%;
        right: 1%;
        width: 12%;
        gap: 0.2em;
        transform: translate(0%, -50%);

        .right-feature-item {
          font-size: 0.48em;
          border-radius: 0.15em;
          border-width: 0.11em;
          padding: 0.15em 1.4em;
          width: 100%;
          line-height: 1;
          letter-spacing: 0.1em;
        }
        
        .foot{
         
        }
      }

      .left-badges {
        top: 57.2%;
        left: 9.8%;
        transform: translate(-50%, -50%);
        font-size: 1.1em;

        .left-badge-item {
          min-width: 1.3em;
          max-width: 1.3em;
        }
      }

      .total-cost {
        top: 93%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.75em;
        padding: 0.2em 0.3em;
        border-radius: 0.45em;
        border-width: 0.1em;
        line-height: 1.2em;
      }`,

    '23': css`

      display: flex;

      .player-avatar {
        width: 68.25%;
        height: 46.5%;
        top: 16%;
        left: 21%;
      }

      .player-avatar-dynamic {
        width: 72%;
        top: 13%;
        left: 49%;
        transform: translate(-50%);

      }

      .player-name {
        font-size: 0.9em;
        text-transform: uppercase;
        top: 55.6%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        z-index: 2;
      }

      .editable-card-player-name {
        text-transform: uppercase;
      }

      .total-score {
        height: 70%;
        left: 27.8%;
        padding: 0.3em 0.1em;
        top: 13.2%;
        transform: translate(-50%);
        background: linear-gradient(to bottom, rgba(36, 29, 70, 0) 0, rgba(36, 29, 70, 0) 8%, rgba(36, 29, 70, .75) 43%, rgba(36, 29, 70, .75) 56%, rgba(36, 29, 70, 0) 76%, rgba(36, 29, 70, 0) 100%);

        .player-score {
          font-size: 1.23em;
          line-height: 0.91em;
        }

        .player-role {
          font-size: 0.63em;
          line-height: 1;
        }

        .player-role-mark{
          display: none;
        }
        
      }

      .chemistry-style{
        width: 19px;
        position : absolute;
        left: 46%;
        bottom: 10%;
        transform: trnaslate(-50%, 0%);
      }

      .feature-score-container {
        padding: 0.3em;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        gap: 0.2em 1em;
        top: 60.6%;
        width: 63.8%;
        left: 50%;
        transform: translate(-50%);

        .splitter-1{
          position : absolute;
          width : 105%;
          height : 0.01em;
          left : 47%;
          transform: translateX(-50%);
          top : -0.3em;
        }

        .splitter-2{
          position : absolute;
          height : 130%;
          width : 0.01em;
          left : 47%;
          transform: translateX(-50%);
          top : -1em;
        }

        .splitter-3{
          position : absolute;
          width : 22%;
          height : 0.01em;
          left : 47%;
          transform: translateX(-50%);
          bottom : 0em;
        }


        div:nth-child(1) {
          grid-column: 1;
          grid-row: 1;
        }

        /* Position 1 */

        div:nth-child(2) {
          grid-column: 1;
          grid-row: 2;
        }

        /* Position 2 */

        div:nth-child(3) {
          grid-column: 1;
          grid-row: 3;
        }

        /* Position 3 */

        div:nth-child(4) {
          grid-column: 2;
          grid-row: 1;
        }

        /* Position 4 */

        div:nth-child(5) {
          grid-column: 2;
          grid-row: 2;
        }

        /* Position 5 */

        div:nth-child(6) {
          grid-column: 2;
          grid-row: 3;
        }

        .feature-score-item {
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          align-items: center;
          gap: 0.2em;
          font-size: 0.76em;
          line-height: 1;
        }
      }

      .n-c-l-group {
        left: 27.8%;
        padding: 0.3em 0.1em;
        top: 28.2%;
        transform: translate(-50%);
        display: flex;
        flex-direction: column;
        gap: 0.4em;
  
        .nation, .league, .club {
          min-width: 1.15em;
          max-width: 1.15em;
        }

        .league {
          display: none;
        }
      }

      .roles-group {
        display: none;
      }

      .right-features {
        top: 43.2%;
        left: 7.96%;
        width: 12%;
        gap: 0.1em;
        transform: translate(0%, -50%);

        .right-feature-item {
          font-size: 0.48em;
          border-radius: 0.15em;
          border-width: 0.11em;
          border-color: transparent;
          padding: 0.1em 1.2em;
          width: 100%;
          line-height: 1;
          letter-spacing: 0.1em;
          background: rgba(0, 0, 0, 0.5) !important;
        }
        
        .foot{
          display:none;
        }
      }

      .left-badges {
        display: none;
      }

      .total-cost {
        top: 93%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.75em;
        padding: 0.2em 0.3em;
        border-radius: 0.45em;
        border-width: 0.1em;
        line-height: 1.2em;
      }`,

    '22': css`

      display: flex;

      .player-avatar {
        width: 68.25%;
        height: 46.5%;
        top: 16%;
        left: 21%;
      }

      .player-avatar-dynamic {
        width: 72%;
        top: 13%;
        left: 49%;
        transform: translate(-50%);
      }

      .player-name {
        font-size: 0.9em;
        text-transform: uppercase;
        top: 55.6%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;
        z-index: 2;
      }

      .editable-card-player-name {
        text-transform: uppercase;
      }

      .total-score {
        height: 70%;
        left: 27.8%;
        padding: 0.3em 0.1em;
        top: 13.2%;
        transform: translate(-50%);
        background: linear-gradient(to bottom, rgba(36, 29, 70, 0) 0, rgba(36, 29, 70, 0) 8%, rgba(36, 29, 70, .75) 43%, rgba(36, 29, 70, .75) 56%, rgba(36, 29, 70, 0) 76%, rgba(36, 29, 70, 0) 100%);

        .player-score {
          font-size: 1.23em;
          line-height: 0.91em;
        }

        .player-role {
          font-size: 0.63em;
          line-height: 1;
        }

        .player-role-mark {
          display: none;
        }
      }

      .chemistry-style{
        width: 19px;
        position : absolute;
        left: 46%;
        bottom: 10%;
        transform: trnaslate(-50%, 0%);
      }

      .feature-score-container {
        
        padding: 0.3em;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        gap: 0.2em 1em;
        top: 60.6%;
        width: 63.8%;
        left: 50%;
        transform: translate(-50%);

        
        .splitter-1{
          position : absolute;
          width : 105%;
          height : 0.01em;
          left : 47%;
          transform: translateX(-50%);
          top : -0.3em;
        }

        .splitter-2{
          position : absolute;
          height : 130%;
          width : 0.01em;
          left : 47%;
          transform: translateX(-50%);
          top : -1em;
        }

        .splitter-3{
          position : absolute;
          width : 22%;
          height : 0.01em;
          left : 47%;
          transform: translateX(-50%);
          bottom : 0em;
        }

        div:nth-child(1) {
          grid-column: 1;
          grid-row: 1;
        }

        /* Position 1 */

        div:nth-child(2) {
          grid-column: 1;
          grid-row: 2;
        }

        /* Position 2 */

        div:nth-child(3) {
          grid-column: 1;
          grid-row: 3;
        }

        /* Position 3 */

        div:nth-child(4) {
          grid-column: 2;
          grid-row: 1;
        }

        /* Position 4 */

        div:nth-child(5) {
          grid-column: 2;
          grid-row: 2;
        }

        /* Position 5 */

        div:nth-child(6) {
          grid-column: 2;
          grid-row: 3;
        }

        /* Position 6 */
        .feature-score-item {
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          align-items: center;
          gap: 0.2em;
          font-size: 0.76em;
          line-height: 1;
        }
      }

      .n-c-l-group {
        left: 27.8%;
        padding: 0.3em 0.1em;
        top: 28.2%;
        transform: translate(-50%);
        display: flex;
        flex-direction: column;
        gap: 0.4em;

        .nation, .league, .club {
          min-width: 1.15em;
          max-width: 1.15em;
        }

        .league {
          display: none;
        }
      }

      .roles-group {
        display: none;
      }

      .right-features {
        top: 38.2%;
        right: 10.96%;
        gap: 0.2em;
        transform: translate(0%, -50%);

        .right-feature-item {
          font-size: 0.48em;
          border-radius: 0.15em;
          border-width: 0.11em;
          border-color: transparent;
          padding: 0.1em;
          line-height: 1;
          letter-spacing: 0.1em;
          background: rgba(0, 0, 0, 0) !important;
        }
        
        .foot{
          display: none;
        }
      }

      .left-badges {
        display: none;
      }

      .total-cost {
        top: 93%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.75em;
        padding: 0.2em 0.3em;
        border-radius: 0.45em;
        border-width: 0.1em;
        line-height: 1.2em;
      }`,

    '18': css`

      display: flex;

      .player-avatar {
        width: 68.25%;
        height: 46.5%;
        top: 16%;
        left: 21%;
      }

      .player-avatar-dynamic {
        width: 60%;
        top: 3%;
        left: 60%;
        transform: translate(-50%);
      }

      .player-name {
        font-size: 0.9em;
        text-transform: uppercase;
        top: 52.5%;
        left: 60%;
        transform: translate(-50%, -50%);
        width: 72%;
        z-index: 2;
      }

      .total-score {
        height: 70%;
        left: 14.2%;
        width: 20%;
        top: 14.2%;
        transform: translate(-50%);

        .player-score {
          font-size: 1.23em;
          line-height: 0.91em;
        }

        .player-role {
          font-size: 0.63em;
          line-height: 1;
        }

        .player-role-mark {
          display: none;
        }
      }

      .feature-score-container {
        padding: 0.3em;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.2em 1em;
        top: 56.6%;
        width: 63.8%;
        left: 60%;
        transform: translate(-50%);

        .feature-score-item {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.2em;
          font-size: 0.76em;
          line-height: 1;
        }
      }

      .n-c-l-group {
        left: 14.2%;
        width: 20%;
        top: 30.2%;
        transform: translate(-50%);

        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;

        gap: 0.2em;

        .nation, .league, .club {
          min-width: 1.35em;
          max-width: 1.35em;
        }

        .league {
          display: none;
        }
      }

      .roles-group {
        display: none;
      }

      .right-features {

        left: 14.2%;
        width: 20%;
        top: 48.8%;
        transform: translate(-50%);
        gap: 0.2em;

        .right-feature-item {
          font-size: 0.58em;
          border-radius: 0.15em;
          border-width: 0.11em;
          border-color: transparent;
          padding: 0.3em 1.2em;
          width: 100%;
          line-height: 1;
          letter-spacing: 0.1em;
          background: rgba(0, 0, 0, 0.0) !important;
        }
        
        .foot{
          display:none;
        }
        
      }

      .left-badges {
        display: none;
      }

      .total-cost {
        top: 93%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.75em;
        padding: 0.2em 0.3em;
        border-radius: 0.45em;
        border-width: 0.1em;
        line-height: 1.2em;
      }`,

    '17': css`

      display: flex;

      .player-avatar {
        width: 68.25%;
        height: 46.5%;
        top: 16%;
        left: 21%;
      }

      .player-avatar-dynamic {
        width: 60%;
        top: 3%;
        left: 60%;
        transform: translate(-50%);
      }

      .player-name {
        font-size: 0.9em;
        text-transform: uppercase;
        top: 53.5%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 92%;
        z-index: 2;
      }

      .total-score {
        height: 70%;
        left: 26.2%;
        width: 20%;
        top: 11.2%;
        transform: translate(-50%);

        .player-score {
          font-size: 1.23em;
          line-height: 0.91em;
        }

        .player-role {
          font-size: 0.63em;
          line-height: 1;
        }

        .player-role-mark {
          display: none;
        }
      }

      .feature-score-container {
        padding: 0.3em 1.2em;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.1em 1em;
        top: 57.6%;
        width: 92.8%;
        left: 50%;
        transform: translate(-50%);

        .feature-score-item {
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          align-items: center;
          gap: 0.2em;
          font-size: 0.86em;
          line-height: 1;
        }
      }

      .n-c-l-group {
        left: 26.2%;
        width: 20%;
        top: 26.2%;
        transform: translate(-50%);

        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;

        gap: 0.2em;

        .nation, .league, .club {
          min-width: 1.75em;
          max-width: 1.75em;
        }

        .league {
          display: none;
        }
      }

      .roles-group {
        display: none;
      }

      .right-features {

        top: 81.2%;
        width: 92.8%;
        left: 50%;
        transform: translate(-50%);
        flex-direction: row;

        gap: 0.2em;

        .right-feature-item {
          font-size: 0.58em;
          border-radius: 0.15em;
          border-width: 0.11em;
          border-color: transparent;
          padding: 0.3em 1.2em;
          width: 100%;
          line-height: 1;
          letter-spacing: 0.1em;
          background: rgba(0, 0, 0, 0.0) !important;
        }
        
        .foot{
          display:none;
        }
      }

      .left-badges {
        display: none;
      }

      .total-cost {
        top: 93%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.75em;
        padding: 0.2em 0.3em;
        border-radius: 0.45em;
        border-width: 0.1em;
        line-height: 1.2em;
      }`,

    '16': css`

      display: flex;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.7);

      .player-avatar {
        width: 68.25%;
        height: 46.5%;
        top: 16%;
        left: 21%;
      }

      .player-avatar-dynamic {
        width: 60%;
        top: 3%;
        left: 60%;
        transform: translate(-50%);
      }

      .player-name {
        font-size: 0.9em;
        text-transform: uppercase;
        top: 53.5%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 92%;
        z-index: 2;
      }

      .total-score {
        height: 70%;
        left: 26.2%;
        width: 20%;
        top: 11.2%;
        transform: translate(-50%);

        .player-score {
          font-size: 1.23em;
          line-height: 0.91em;
        }

        .player-role {
          font-size: 0.63em;
          line-height: 1;
        }

        .player-role-mark {
          display: none;
        }
      }

      .feature-score-container {
        padding: 0.3em 1.2em;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.1em 1em;
        top: 57.6%;
        width: 92.8%;
        left: 50%;
        transform: translate(-50%);

        .feature-score-item {
          display: flex;
          flex-direction: row-reverse;
          justify-content: center;
          align-items: center;
          gap: 0.2em;
          font-size: 0.86em;
          line-height: 1;
        }
      }

      .n-c-l-group {
        left: 26.2%;
        width: 20%;
        top: 26.2%;
        transform: translate(-50%);

        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;

        gap: 0.2em;

        .nation, .league, .club {
          min-width: 1.75em;
          max-width: 1.75em;
        }

        .league {
          display: none;
        }
      }

      .roles-group {
        display: none;
      }

      .right-features {

        top: 81.2%;
        width: 92.8%;
        left: 50%;
        transform: translate(-50%);
        flex-direction: row;
        gap: 0.2em;

        .right-feature-item {
          font-size: 0.58em;
          border-radius: 0.15em;
          border-width: 0.11em;
          border-color: transparent;
          padding: 0.3em 1.2em;
          width: 100%;
          line-height: 1;
          letter-spacing: 0.1em;
          background: rgba(0, 0, 0, 0.0) !important;
        }
        
        .foot{
          display:none;
        }
      }

      .left-badges {
        display: none;
      }

      .total-cost {
        top: 93%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 0.75em;
        padding: 0.2em 0.3em;
        border-radius: 0.45em;
        border-width: 0.1em;
        line-height: 1.2em;
      }`,

    '21': css``,

    '20': css``,

    '19': css``,
}

export const editableFutCardYearOfLayouts: Record<YearType, YearLayouts> = {
    '24': {
        avatar: {
            dynamic: {
                width: 92,
                height: 100,
                top: 50,
                left: 50
            },
            default: {
                width: 70,
                height: 50,
                top: 38,
                left: 50
            }
        },
        playerName: {
            width: 100,
            height: 100,
            left: 50,
            top: 65.6
        },
        featureIcon:{
            width: 7,
            top: 15,
            left: 35,
            height: 100
        }
    },
    '23': {
        avatar: {
            dynamic: {
                width: 73,
                height: 100,
                top: 49,
                left: 50
            },
            default: {
                width: 55.5,
                height: 100,
                top: 32,
                left: 58
            }
        },
        playerName: {
            width: 100,
            height: 100,
            left: 50,
            top: 56
        },
        featureIcon:{
            width: 7,
            top: 13,
            left: 32,
            height: 100
        }
    },
    '22': {
        avatar: {
            dynamic: {
                width: 73,
                height: 100,
                top: 49,
                left: 50
            },
            default: {
                width: 55.5,
                height: 100,
                top: 32,
                left: 58
            }
        },
        playerName: {
            width: 100,
            height: 100,
            left: 50,
            top: 56
        },
        featureIcon:{
            width: 7,
            top: 13,
            left: 32,
            height: 100
        }
    },
    '21': {
        avatar: {
            dynamic: {
                width: 73,
                height: 100,
                top: 49,
                left: 50
            },
            default: {
                width: 55.5,
                height: 100,
                top: 32,
                left: 58
            }
        },
        playerName: {
            width: 100,
            height: 100,
            left: 50,
            top: 56
        },
        featureIcon:{
            width: 7,
            top: 13,
            left: 32,
            height: 100
        }
    },
    '20': {
        avatar: {
            dynamic: {
                width: 73,
                height: 100,
                top: 49,
                left: 50
            },
            default: {
                width: 55.5,
                height: 100,
                top: 32,
                left: 58
            }
        },
        playerName: {
            width: 100,
            height: 100,
            left: 50,
            top: 56
        },
        featureIcon:{
            width: 7,
            top: 13,
            left: 32,
            height: 100
        }
    },
    '19': {
        avatar: {
            dynamic: {
                width: 100,
                height: 100,
                top: 50,
                left: 50
            },
            default: {
                width: 55.5,
                height: 100,
                top: 32,
                left: 58
            }
        },
        playerName: {
            width: 100,
            height: 100,
            left: 50,
            top: 56
        },
        featureIcon:{
            width: 7,
            top: 16,
            left: 40,
            height: 100
        }
    },
    '18': {
        avatar: {
            dynamic: {
                width: 100,
                height: 100,
                top: 50,
                left: 50
            },
            default: {
                width: 55.5,
                height: 100,
                top: 32,
                left: 58
            }
        },
        playerName: {
            width: 100,
            height: 100,
            left: 50,
            top: 56
        },
        featureIcon:{
            width: 7,
            top: 13,
            left: 32,
            height: 100
        }
    },
    '17': {
        avatar: {
            dynamic: {
                width: 100,
                height: 100,
                top: 50,
                left: 50
            },
            default: {
                width: 55.5,
                height: 100,
                top: 32,
                left: 58
            }
        },
        playerName: {
            width: 100,
            height: 100,
            left: 50,
            top: 56
        },
        featureIcon:{
            width: 7,
            top: 13,
            left: 32,
            height: 100
        }
    },
    '16': {
        avatar: {
            dynamic: {
                width: 100,
                height: 100,
                top: 50,
                left: 50
            },
            default: {
                width: 55.5,
                height: 100,
                top: 32,
                left: 58
            }
        },
        playerName: {
            width: 100,
            height: 100,
            left: 50,
            top: 56
        },
        featureIcon:{
            width: 7,
            top: 13,
            left: 32,
            height: 100
        }
    }
}