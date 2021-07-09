<template>
  <div class="topic-list-container">
    <el-card class="no-padding">
      <div slot="header">
        <ul class="topic-type-list">
          <li class="topic-type-item" v-for="list in topicTypeList" :key="list.id" @click="selectType(list.id)" :class="{active: list.id == currActive}">
            {{ list.name }}
          </li>
        </ul>
      </div>
      <el-skeleton :rows="12" animated :loading="loading">
        <template>
          <div class="topic-list">
            <div class="topic-item">
              <div class="topic-info mg-r">
                <router-link to="/user">
                  <img src="~assets/img/default-user.jpg" class="user-avatar" alt="">
                </router-link>
                <div class="topic-type topic-type-top mg-r">
                  置顶
                </div>
                <div class="info-wapper">
                  <div class="reply-count mg-r">
                    <span class="count">100</span>
                    <span class="count">/</span>
                    <span class="count">1000</span>
                  </div>
                  <div class="topic-title">
                    <span>梓明爱asdasdasdasdasdasd茵茵 梓明爱asdasdasdasdasdasd茵茵梓明爱asdasdasdasdasdasd茵茵梓明爱asdasdasdasdasdasd茵茵</span>
                  </div>
                </div>
              </div>
              <div class="last-active-time">
                <router-link to="/user">
                  <img src="~assets/img/default-user.jpg" class="user-avatar" alt="">
                </router-link>
                <span class="last_time">三天前</span>
              </div>
            </div>
          </div>
        </template>
      </el-skeleton>
    </el-card>
  </div>
</template>

<script>
import { topicTypeList } from './list'

export default {
  data() {
    return {
      topicTypeList,
      currActive: -1,
      loading: true
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false
    }, 5000)
  },
  methods: {
    selectType(id) {
      this.currActive = id
    }
  }
}
</script>

<style lang="scss">
$avatar_size: 30px;
$mg: 10px;

.topic-list-container {
  .topic-type-list {
    display: flex;
    .topic-type-item {
      padding: 10px;
      font-size: 14px;
      &.active {
        @include topic_type_active(5px);
      }
    }
  }
  .topic-list {
    .mg-r {
      margin-right: $mg;
    }
    .topic-item {
      &:hover {
        background: #f5f5f5;
      }
      &:first-child {
        border-top: none;
      }
      font-size: 14px;
      border-top: 1px solid $main_color;
      padding: $mg;
      @include flex(true, ver);
      .topic-info {
        @include flex(true, ver);
        .user-avatar {
          width: $avatar_size;
          height: $avatar_size;
        }
        .topic-type {
          width: 32px;
          height: 24px;
          line-height: 24px;
          text-align: center;;
          font-size: 12px;
          margin: 0 10px;
          &.topic-type-top {
            @include topic_type_active(4px);
          }
        }
        .info-wapper {
          @include flex(true, ver);
          @media screen and (max-width: $change_size) {
            display: block;
          }
          .reply-count {
            width: 100px;
            text-align: center;
            @media screen and (max-width: $change_size) {
              text-align: left;
            }
          }
          .topic-title {
            width: 260px;
            @media screen and (max-width: $change_size) {
              width: 250px;
            }
            @media screen and (min-width: 1100px) {
              width: 350px;
            }
            span {
              display: block;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
        }
      }
      .last-active-time {
        @include flex(true, ver);
        .user-avatar {
          width: $avatar_size;
          height: $avatar_size;
        }
        .last_time {
          margin-left: $mg;
        }
      }
    }
  }
}
</style>
