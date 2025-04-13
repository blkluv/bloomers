import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BigNumber: { input: any; output: any }
  JSON: { input: any; output: any }
}

export type Chat = {
  __typename?: 'Chat'
  authorProfileId?: Maybe<Scalars['String']['output']>
  avatarUrl?: Maybe<Scalars['String']['output']>
  clipPostId?: Maybe<Scalars['String']['output']>
  content?: Maybe<Scalars['String']['output']>
  contentType?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['BigNumber']['output']>
  currencySymbol?: Maybe<Scalars['String']['output']>
  formattedAmount?: Maybe<Scalars['String']['output']>
  handle?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  image?: Maybe<Scalars['String']['output']>
  profileId?: Maybe<Scalars['String']['output']>
  txHash?: Maybe<Scalars['String']['output']>
}

export type ClipResult = {
  __typename?: 'ClipResult'
  downloadUrl?: Maybe<Scalars['String']['output']>
  playbackId?: Maybe<Scalars['String']['output']>
  playbackUrl?: Maybe<Scalars['String']['output']>
}

export type FeaturedCoin = {
  __typename?: 'FeaturedCoin'
  chainId?: Maybe<Scalars['String']['output']>
  coinAddress?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
}

export type FeaturedCoinInput = {
  chainId?: InputMaybe<Scalars['String']['input']>
  coinAddress?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export type IpfsResult = {
  __typename?: 'IpfsResult'
  cid?: Maybe<Scalars['String']['output']>
  size?: Maybe<Scalars['Int']['output']>
}

export type IsVerifiedResult = {
  __typename?: 'IsVerifiedResult'
  isVerified?: Maybe<Scalars['Boolean']['output']>
  profileId?: Maybe<Scalars['String']['output']>
}

export type Mutation = {
  __typename?: 'Mutation'
  addNotificationSubscriberToStreamer?: Maybe<Scalars['Boolean']['output']>
  addSubscription?: Maybe<Scalars['Boolean']['output']>
  createClip?: Maybe<ClipResult>
  createMyLensStreamSession?: Maybe<Scalars['Boolean']['output']>
  removeNotificationSubscriberFromStreamer?: Maybe<Scalars['Boolean']['output']>
  updateLensStreamSession?: Maybe<Scalars['Boolean']['output']>
  updateMyStream?: Maybe<Scalars['Boolean']['output']>
  uploadDataToAR?: Maybe<Scalars['String']['output']>
  uploadDataToIpfs?: Maybe<IpfsResult>
}

export type MutationAddNotificationSubscriberToStreamerArgs = {
  profileId: Scalars['String']['input']
}

export type MutationAddSubscriptionArgs = {
  subscription: Scalars['JSON']['input']
}

export type MutationCreateClipArgs = {
  endTime?: InputMaybe<Scalars['BigNumber']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  playbackId: Scalars['String']['input']
  sessionId?: InputMaybe<Scalars['String']['input']>
  startTime: Scalars['BigNumber']['input']
}

export type MutationCreateMyLensStreamSessionArgs = {
  publicationId: Scalars['String']['input']
  sessionId?: InputMaybe<Scalars['String']['input']>
  viewType?: InputMaybe<ViewType>
}

export type MutationRemoveNotificationSubscriberFromStreamerArgs = {
  profileId: Scalars['String']['input']
}

export type MutationUpdateLensStreamSessionArgs = {
  customThumbnail?: InputMaybe<Scalars['String']['input']>
  sessionId: Scalars['String']['input']
  viewType?: InputMaybe<ViewType>
}

export type MutationUpdateMyStreamArgs = {
  request: UpdateStreamRequest
}

export type MutationUploadDataToArArgs = {
  data: Scalars['String']['input']
}

export type MutationUploadDataToIpfsArgs = {
  data: Scalars['String']['input']
}

export type MyStream = Stream & {
  __typename?: 'MyStream'
  createdAt?: Maybe<Scalars['BigNumber']['output']>
  featuredCoin?: Maybe<FeaturedCoin>
  isActive?: Maybe<Scalars['Boolean']['output']>
  isHealthy?: Maybe<Scalars['Boolean']['output']>
  issues?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  lastSeen?: Maybe<Scalars['BigNumber']['output']>
  latestSessionCreatedAt?: Maybe<Scalars['BigNumber']['output']>
  latestSessionId?: Maybe<Scalars['String']['output']>
  nextStreamTime?: Maybe<Scalars['BigNumber']['output']>
  playbackId?: Maybe<Scalars['String']['output']>
  premium?: Maybe<Scalars['Boolean']['output']>
  profileId: Scalars['String']['output']
  streamDescription?: Maybe<Scalars['String']['output']>
  streamKey?: Maybe<Scalars['String']['output']>
  streamName?: Maybe<Scalars['String']['output']>
}

export type Price = {
  __typename?: 'Price'
  DayPercentChange?: Maybe<Scalars['String']['output']>
  usdPrice?: Maybe<Scalars['Float']['output']>
  usdPriceFormatted?: Maybe<Scalars['String']['output']>
}

export type Query = {
  __typename?: 'Query'
  getMyRecordedStreamSessions?: Maybe<Array<Maybe<RecordedSession>>>
  isSubcribedNotificationForStreamer?: Maybe<Scalars['Boolean']['output']>
  isVerified?: Maybe<Array<Maybe<IsVerifiedResult>>>
  liveStreamers?: Maybe<Array<Maybe<Streamer>>>
  myStream?: Maybe<MyStream>
  offlineStreamers?: Maybe<Array<Maybe<Streamer>>>
  ping?: Maybe<Scalars['JSON']['output']>
  shouldCreateNewPost?: Maybe<Scalars['String']['output']>
  streamChats?: Maybe<Array<Maybe<Chat>>>
  streamReplayPublications?: Maybe<StreamReplayPublicationsResult>
  streamReplayRecording?: Maybe<StreamReplayRecording>
  streamer?: Maybe<SingleStreamer>
  streamerStats?: Maybe<StreamStats>
  thumbnail?: Maybe<Scalars['String']['output']>
  tokenPrice?: Maybe<Price>
}

export type QueryGetMyRecordedStreamSessionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type QueryIsSubcribedNotificationForStreamerArgs = {
  profileId: Scalars['String']['input']
}

export type QueryIsVerifiedArgs = {
  profileIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryStreamChatsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  profileId: Scalars['String']['input']
}

export type QueryStreamReplayPublicationsArgs = {
  profileId?: InputMaybe<Scalars['String']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type QueryStreamReplayRecordingArgs = {
  profileId?: InputMaybe<Scalars['String']['input']>
  publicationId?: InputMaybe<Scalars['String']['input']>
  sessionId?: InputMaybe<Scalars['String']['input']>
}

export type QueryStreamerArgs = {
  profileId: Scalars['String']['input']
}

export type QueryStreamerStatsArgs = {
  profileId: Scalars['String']['input']
}

export type QueryThumbnailArgs = {
  handle: Scalars['String']['input']
}

export type QueryTokenPriceArgs = {
  address: Scalars['String']['input']
}

export type RecordedSession = {
  __typename?: 'RecordedSession'
  createdAt?: Maybe<Scalars['BigNumber']['output']>
  customThumbnail?: Maybe<Scalars['String']['output']>
  mp4Url?: Maybe<Scalars['String']['output']>
  playbackId?: Maybe<Scalars['String']['output']>
  publicationId?: Maybe<Scalars['String']['output']>
  recordingUrl?: Maybe<Scalars['String']['output']>
  sessionId?: Maybe<Scalars['String']['output']>
  sourceSegmentsDuration?: Maybe<Scalars['Float']['output']>
  viewType?: Maybe<ViewType>
}

export type SingleStreamer = Stream & {
  __typename?: 'SingleStreamer'
  createdAt?: Maybe<Scalars['BigNumber']['output']>
  featuredCoin?: Maybe<FeaturedCoin>
  isActive?: Maybe<Scalars['Boolean']['output']>
  lastSeen?: Maybe<Scalars['BigNumber']['output']>
  latestSessionCreatedAt?: Maybe<Scalars['BigNumber']['output']>
  latestSessionId?: Maybe<Scalars['String']['output']>
  latestStreamPublicationId?: Maybe<Scalars['String']['output']>
  nextStreamTime?: Maybe<Scalars['BigNumber']['output']>
  playbackId?: Maybe<Scalars['String']['output']>
  premium?: Maybe<Scalars['Boolean']['output']>
  profileId: Scalars['String']['output']
  streamDescription?: Maybe<Scalars['String']['output']>
  streamName?: Maybe<Scalars['String']['output']>
  thumbnail?: Maybe<Scalars['String']['output']>
}

export type Stream = {
  createdAt?: Maybe<Scalars['BigNumber']['output']>
  featuredCoin?: Maybe<FeaturedCoin>
  isActive?: Maybe<Scalars['Boolean']['output']>
  lastSeen?: Maybe<Scalars['BigNumber']['output']>
  playbackId?: Maybe<Scalars['String']['output']>
  profileId: Scalars['String']['output']
  streamDescription?: Maybe<Scalars['String']['output']>
  streamName?: Maybe<Scalars['String']['output']>
}

export type StreamReplayPublication = {
  __typename?: 'StreamReplayPublication'
  createdAt?: Maybe<Scalars['BigNumber']['output']>
  premium?: Maybe<Scalars['Boolean']['output']>
  profileId?: Maybe<Scalars['String']['output']>
  publicationId?: Maybe<Scalars['String']['output']>
  sessionId?: Maybe<Scalars['String']['output']>
  sourceSegmentsDuration?: Maybe<Scalars['Float']['output']>
  thumbnail?: Maybe<Scalars['String']['output']>
}

export type StreamReplayPublicationsResult = {
  __typename?: 'StreamReplayPublicationsResult'
  hasMore: Scalars['Boolean']['output']
  next: Scalars['Int']['output']
  streamReplayPublications?: Maybe<Array<Maybe<StreamReplayPublication>>>
}

export type StreamReplayRecording = {
  __typename?: 'StreamReplayRecording'
  createdAt?: Maybe<Scalars['BigNumber']['output']>
  premium?: Maybe<Scalars['Boolean']['output']>
  profileId?: Maybe<Scalars['String']['output']>
  publicationId?: Maybe<Scalars['String']['output']>
  recordingUrl?: Maybe<Scalars['String']['output']>
  sessionId?: Maybe<Scalars['String']['output']>
}

export type StreamStats = {
  __typename?: 'StreamStats'
  startedStreaming?: Maybe<Scalars['BigNumber']['output']>
  totalStreams?: Maybe<Scalars['Int']['output']>
}

export type Streamer = Stream & {
  __typename?: 'Streamer'
  createdAt?: Maybe<Scalars['BigNumber']['output']>
  featuredCoin?: Maybe<FeaturedCoin>
  isActive?: Maybe<Scalars['Boolean']['output']>
  lastSeen?: Maybe<Scalars['BigNumber']['output']>
  liveCount?: Maybe<Scalars['Int']['output']>
  nextStreamTime?: Maybe<Scalars['BigNumber']['output']>
  playbackId?: Maybe<Scalars['String']['output']>
  premium?: Maybe<Scalars['Boolean']['output']>
  profileId: Scalars['String']['output']
  streamDescription?: Maybe<Scalars['String']['output']>
  streamName?: Maybe<Scalars['String']['output']>
  thumbnail?: Maybe<Scalars['String']['output']>
}

export type UpdateStreamRequest = {
  featuredCoin?: InputMaybe<FeaturedCoinInput>
  nextStreamTime?: InputMaybe<Scalars['BigNumber']['input']>
  streamDescription?: InputMaybe<Scalars['String']['input']>
  streamName?: InputMaybe<Scalars['String']['input']>
}

export enum ViewType {
  Private = 'private',
  Public = 'public',
  Unlisted = 'unlisted'
}

export type AddNotificationSubscriberToStreamerMutationVariables = Exact<{
  profileId: Scalars['String']['input']
}>

export type AddNotificationSubscriberToStreamerMutation = {
  __typename?: 'Mutation'
  addNotificationSubscriberToStreamer?: boolean | null
}

export type AddSubscriptionMutationVariables = Exact<{
  subscription: Scalars['JSON']['input']
}>

export type AddSubscriptionMutation = {
  __typename?: 'Mutation'
  addSubscription?: boolean | null
}

export type CreateClipMutationVariables = Exact<{
  playbackId: Scalars['String']['input']
  startTime: Scalars['BigNumber']['input']
  endTime?: InputMaybe<Scalars['BigNumber']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  sessionId?: InputMaybe<Scalars['String']['input']>
}>

export type CreateClipMutation = {
  __typename?: 'Mutation'
  createClip?: {
    __typename?: 'ClipResult'
    downloadUrl?: string | null
    playbackId?: string | null
    playbackUrl?: string | null
  } | null
}

export type CreateMyLensStreamSessionMutationVariables = Exact<{
  publicationId: Scalars['String']['input']
  viewType?: InputMaybe<ViewType>
  sessionId?: InputMaybe<Scalars['String']['input']>
}>

export type CreateMyLensStreamSessionMutation = {
  __typename?: 'Mutation'
  createMyLensStreamSession?: boolean | null
}

export type GetMyRecordedStreamSessionsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
}>

export type GetMyRecordedStreamSessionsQuery = {
  __typename?: 'Query'
  getMyRecordedStreamSessions?: Array<{
    __typename?: 'RecordedSession'
    publicationId?: string | null
    mp4Url?: string | null
    sourceSegmentsDuration?: number | null
    recordingUrl?: string | null
    viewType?: ViewType | null
    customThumbnail?: string | null
    createdAt?: any | null
    playbackId?: string | null
    sessionId?: string | null
  } | null> | null
}

export type IsSubcribedNotificationForStreamerQueryVariables = Exact<{
  profileId: Scalars['String']['input']
}>

export type IsSubcribedNotificationForStreamerQuery = {
  __typename?: 'Query'
  isSubcribedNotificationForStreamer?: boolean | null
}

export type IsVerifiedQueryVariables = Exact<{
  profileIds?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >
}>

export type IsVerifiedQuery = {
  __typename?: 'Query'
  isVerified?: Array<{
    __typename?: 'IsVerifiedResult'
    isVerified?: boolean | null
    profileId?: string | null
  } | null> | null
}

export type LiveStreamersQueryVariables = Exact<{ [key: string]: never }>

export type LiveStreamersQuery = {
  __typename?: 'Query'
  liveStreamers?: Array<{
    __typename?: 'Streamer'
    profileId: string
    streamName?: string | null
    lastSeen?: any | null
    isActive?: boolean | null
    createdAt?: any | null
    playbackId?: string | null
    thumbnail?: string | null
    liveCount?: number | null
    premium?: boolean | null
  } | null> | null
}

export type MyStreamQueryVariables = Exact<{ [key: string]: never }>

export type MyStreamQuery = {
  __typename?: 'Query'
  myStream?: {
    __typename?: 'MyStream'
    profileId: string
    streamName?: string | null
    streamDescription?: string | null
    lastSeen?: any | null
    playbackId?: string | null
    streamKey?: string | null
    isActive?: boolean | null
    latestSessionId?: string | null
    latestSessionCreatedAt?: any | null
    premium?: boolean | null
    isHealthy?: boolean | null
    issues?: Array<string | null> | null
    nextStreamTime?: any | null
    featuredCoin?: {
      __typename?: 'FeaturedCoin'
      type?: string | null
      coinAddress?: string | null
      chainId?: string | null
    } | null
  } | null
}

export type OfflineStreamersQueryVariables = Exact<{ [key: string]: never }>

export type OfflineStreamersQuery = {
  __typename?: 'Query'
  offlineStreamers?: Array<{
    __typename?: 'Streamer'
    profileId: string
    lastSeen?: any | null
    premium?: boolean | null
    nextStreamTime?: any | null
  } | null> | null
}

export type QueryQueryVariables = Exact<{ [key: string]: never }>

export type QueryQuery = { __typename?: 'Query'; ping?: any | null }

export type RemoveNotificationSubscriberFromStreamerMutationVariables = Exact<{
  profileId: Scalars['String']['input']
}>

export type RemoveNotificationSubscriberFromStreamerMutation = {
  __typename?: 'Mutation'
  removeNotificationSubscriberFromStreamer?: boolean | null
}

export type StreamReplayRecordingQueryVariables = Exact<{
  publicationId?: InputMaybe<Scalars['String']['input']>
  profileId?: InputMaybe<Scalars['String']['input']>
  sessionId?: InputMaybe<Scalars['String']['input']>
}>

export type StreamReplayRecordingQuery = {
  __typename?: 'Query'
  streamReplayRecording?: {
    __typename?: 'StreamReplayRecording'
    publicationId?: string | null
    recordingUrl?: string | null
    premium?: boolean | null
    createdAt?: any | null
    sessionId?: string | null
    profileId?: string | null
  } | null
}

export type ShouldCreateNewPostQueryVariables = Exact<{ [key: string]: never }>

export type ShouldCreateNewPostQuery = {
  __typename?: 'Query'
  shouldCreateNewPost?: string | null
}

export type StreamChatsQueryVariables = Exact<{
  profileId: Scalars['String']['input']
}>

export type StreamChatsQuery = {
  __typename?: 'Query'
  streamChats?: Array<{
    __typename?: 'Chat'
    content?: string | null
    handle?: string | null
    avatarUrl?: string | null
    profileId?: string | null
    id?: string | null
    createdAt?: any | null
    txHash?: string | null
    formattedAmount?: string | null
    currencySymbol?: string | null
    authorProfileId?: string | null
    contentType?: string | null
    clipPostId?: string | null
    image?: string | null
  } | null> | null
}

export type StreamReplayPublicationsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  profileId?: InputMaybe<Scalars['String']['input']>
}>

export type StreamReplayPublicationsQuery = {
  __typename?: 'Query'
  streamReplayPublications?: {
    __typename?: 'StreamReplayPublicationsResult'
    next: number
    hasMore: boolean
    streamReplayPublications?: Array<{
      __typename?: 'StreamReplayPublication'
      publicationId?: string | null
      thumbnail?: string | null
      sourceSegmentsDuration?: number | null
      premium?: boolean | null
      createdAt?: any | null
      sessionId?: string | null
      profileId?: string | null
    } | null> | null
  } | null
}

export type StreamerQueryVariables = Exact<{
  profileId: Scalars['String']['input']
}>

export type StreamerQuery = {
  __typename?: 'Query'
  streamer?: {
    __typename?: 'SingleStreamer'
    profileId: string
    lastSeen?: any | null
    isActive?: boolean | null
    createdAt?: any | null
    playbackId?: string | null
    streamName?: string | null
    streamDescription?: string | null
    latestStreamPublicationId?: string | null
    latestSessionId?: string | null
    latestSessionCreatedAt?: any | null
    nextStreamTime?: any | null
    premium?: boolean | null
    featuredCoin?: {
      __typename?: 'FeaturedCoin'
      type?: string | null
      coinAddress?: string | null
      chainId?: string | null
    } | null
  } | null
}

export type ThumbnailQueryVariables = Exact<{
  handle: Scalars['String']['input']
}>

export type ThumbnailQuery = { __typename?: 'Query'; thumbnail?: string | null }

export type TokenPriceQueryVariables = Exact<{
  address: Scalars['String']['input']
}>

export type TokenPriceQuery = {
  __typename?: 'Query'
  tokenPrice?: {
    __typename?: 'Price'
    usdPrice?: number | null
    usdPriceFormatted?: string | null
    DayPercentChange?: string | null
  } | null
}

export type UpdateLensStreamSessionMutationVariables = Exact<{
  sessionId: Scalars['String']['input']
  viewType?: InputMaybe<ViewType>
  customThumbnail?: InputMaybe<Scalars['String']['input']>
}>

export type UpdateLensStreamSessionMutation = {
  __typename?: 'Mutation'
  updateLensStreamSession?: boolean | null
}

export type UpdateMyStreamMutationVariables = Exact<{
  request: UpdateStreamRequest
}>

export type UpdateMyStreamMutation = {
  __typename?: 'Mutation'
  updateMyStream?: boolean | null
}

export type UploadDataToArMutationVariables = Exact<{
  data: Scalars['String']['input']
}>

export type UploadDataToArMutation = {
  __typename?: 'Mutation'
  uploadDataToAR?: string | null
}

export type UploadDataToIpfsMutationVariables = Exact<{
  data: Scalars['String']['input']
}>

export type UploadDataToIpfsMutation = {
  __typename?: 'Mutation'
  uploadDataToIpfs?: {
    __typename?: 'IpfsResult'
    cid?: string | null
    size?: number | null
  } | null
}

export const AddNotificationSubscriberToStreamerDocument = gql`
  mutation AddNotificationSubscriberToStreamer($profileId: String!) {
    addNotificationSubscriberToStreamer(profileId: $profileId)
  }
`
export type AddNotificationSubscriberToStreamerMutationFn =
  Apollo.MutationFunction<
    AddNotificationSubscriberToStreamerMutation,
    AddNotificationSubscriberToStreamerMutationVariables
  >

/**
 * __useAddNotificationSubscriberToStreamerMutation__
 *
 * To run a mutation, you first call `useAddNotificationSubscriberToStreamerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNotificationSubscriberToStreamerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNotificationSubscriberToStreamerMutation, { data, loading, error }] = useAddNotificationSubscriberToStreamerMutation({
 *   variables: {
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useAddNotificationSubscriberToStreamerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddNotificationSubscriberToStreamerMutation,
    AddNotificationSubscriberToStreamerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    AddNotificationSubscriberToStreamerMutation,
    AddNotificationSubscriberToStreamerMutationVariables
  >(AddNotificationSubscriberToStreamerDocument, options)
}
export type AddNotificationSubscriberToStreamerMutationHookResult = ReturnType<
  typeof useAddNotificationSubscriberToStreamerMutation
>
export type AddNotificationSubscriberToStreamerMutationResult =
  Apollo.MutationResult<AddNotificationSubscriberToStreamerMutation>
export type AddNotificationSubscriberToStreamerMutationOptions =
  Apollo.BaseMutationOptions<
    AddNotificationSubscriberToStreamerMutation,
    AddNotificationSubscriberToStreamerMutationVariables
  >
export const AddSubscriptionDocument = gql`
  mutation AddSubscription($subscription: JSON!) {
    addSubscription(subscription: $subscription)
  }
`
export type AddSubscriptionMutationFn = Apollo.MutationFunction<
  AddSubscriptionMutation,
  AddSubscriptionMutationVariables
>

/**
 * __useAddSubscriptionMutation__
 *
 * To run a mutation, you first call `useAddSubscriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSubscriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSubscriptionMutation, { data, loading, error }] = useAddSubscriptionMutation({
 *   variables: {
 *      subscription: // value for 'subscription'
 *   },
 * });
 */
export function useAddSubscriptionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddSubscriptionMutation,
    AddSubscriptionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    AddSubscriptionMutation,
    AddSubscriptionMutationVariables
  >(AddSubscriptionDocument, options)
}
export type AddSubscriptionMutationHookResult = ReturnType<
  typeof useAddSubscriptionMutation
>
export type AddSubscriptionMutationResult =
  Apollo.MutationResult<AddSubscriptionMutation>
export type AddSubscriptionMutationOptions = Apollo.BaseMutationOptions<
  AddSubscriptionMutation,
  AddSubscriptionMutationVariables
>
export const CreateClipDocument = gql`
  mutation CreateClip(
    $playbackId: String!
    $startTime: BigNumber!
    $endTime: BigNumber
    $name: String
    $sessionId: String
  ) {
    createClip(
      playbackId: $playbackId
      startTime: $startTime
      endTime: $endTime
      name: $name
      sessionId: $sessionId
    ) {
      downloadUrl
      playbackId
      playbackUrl
    }
  }
`
export type CreateClipMutationFn = Apollo.MutationFunction<
  CreateClipMutation,
  CreateClipMutationVariables
>

/**
 * __useCreateClipMutation__
 *
 * To run a mutation, you first call `useCreateClipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClipMutation, { data, loading, error }] = useCreateClipMutation({
 *   variables: {
 *      playbackId: // value for 'playbackId'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *      name: // value for 'name'
 *      sessionId: // value for 'sessionId'
 *   },
 * });
 */
export function useCreateClipMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateClipMutation,
    CreateClipMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateClipMutation, CreateClipMutationVariables>(
    CreateClipDocument,
    options
  )
}
export type CreateClipMutationHookResult = ReturnType<
  typeof useCreateClipMutation
>
export type CreateClipMutationResult = Apollo.MutationResult<CreateClipMutation>
export type CreateClipMutationOptions = Apollo.BaseMutationOptions<
  CreateClipMutation,
  CreateClipMutationVariables
>
export const CreateMyLensStreamSessionDocument = gql`
  mutation CreateMyLensStreamSession(
    $publicationId: String!
    $viewType: ViewType
    $sessionId: String
  ) {
    createMyLensStreamSession(
      publicationId: $publicationId
      viewType: $viewType
      sessionId: $sessionId
    )
  }
`
export type CreateMyLensStreamSessionMutationFn = Apollo.MutationFunction<
  CreateMyLensStreamSessionMutation,
  CreateMyLensStreamSessionMutationVariables
>

/**
 * __useCreateMyLensStreamSessionMutation__
 *
 * To run a mutation, you first call `useCreateMyLensStreamSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMyLensStreamSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMyLensStreamSessionMutation, { data, loading, error }] = useCreateMyLensStreamSessionMutation({
 *   variables: {
 *      publicationId: // value for 'publicationId'
 *      viewType: // value for 'viewType'
 *      sessionId: // value for 'sessionId'
 *   },
 * });
 */
export function useCreateMyLensStreamSessionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMyLensStreamSessionMutation,
    CreateMyLensStreamSessionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateMyLensStreamSessionMutation,
    CreateMyLensStreamSessionMutationVariables
  >(CreateMyLensStreamSessionDocument, options)
}
export type CreateMyLensStreamSessionMutationHookResult = ReturnType<
  typeof useCreateMyLensStreamSessionMutation
>
export type CreateMyLensStreamSessionMutationResult =
  Apollo.MutationResult<CreateMyLensStreamSessionMutation>
export type CreateMyLensStreamSessionMutationOptions =
  Apollo.BaseMutationOptions<
    CreateMyLensStreamSessionMutation,
    CreateMyLensStreamSessionMutationVariables
  >
export const GetMyRecordedStreamSessionsDocument = gql`
  query GetMyRecordedStreamSessions($skip: Int) {
    getMyRecordedStreamSessions(skip: $skip) {
      publicationId
      mp4Url
      sourceSegmentsDuration
      recordingUrl
      viewType
      customThumbnail
      createdAt
      playbackId
      sessionId
    }
  }
`

/**
 * __useGetMyRecordedStreamSessionsQuery__
 *
 * To run a query within a React component, call `useGetMyRecordedStreamSessionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyRecordedStreamSessionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyRecordedStreamSessionsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetMyRecordedStreamSessionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMyRecordedStreamSessionsQuery,
    GetMyRecordedStreamSessionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetMyRecordedStreamSessionsQuery,
    GetMyRecordedStreamSessionsQueryVariables
  >(GetMyRecordedStreamSessionsDocument, options)
}
export function useGetMyRecordedStreamSessionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMyRecordedStreamSessionsQuery,
    GetMyRecordedStreamSessionsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetMyRecordedStreamSessionsQuery,
    GetMyRecordedStreamSessionsQueryVariables
  >(GetMyRecordedStreamSessionsDocument, options)
}
export function useGetMyRecordedStreamSessionsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetMyRecordedStreamSessionsQuery,
        GetMyRecordedStreamSessionsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetMyRecordedStreamSessionsQuery,
    GetMyRecordedStreamSessionsQueryVariables
  >(GetMyRecordedStreamSessionsDocument, options)
}
export type GetMyRecordedStreamSessionsQueryHookResult = ReturnType<
  typeof useGetMyRecordedStreamSessionsQuery
>
export type GetMyRecordedStreamSessionsLazyQueryHookResult = ReturnType<
  typeof useGetMyRecordedStreamSessionsLazyQuery
>
export type GetMyRecordedStreamSessionsSuspenseQueryHookResult = ReturnType<
  typeof useGetMyRecordedStreamSessionsSuspenseQuery
>
export type GetMyRecordedStreamSessionsQueryResult = Apollo.QueryResult<
  GetMyRecordedStreamSessionsQuery,
  GetMyRecordedStreamSessionsQueryVariables
>
export const IsSubcribedNotificationForStreamerDocument = gql`
  query IsSubcribedNotificationForStreamer($profileId: String!) {
    isSubcribedNotificationForStreamer(profileId: $profileId)
  }
`

/**
 * __useIsSubcribedNotificationForStreamerQuery__
 *
 * To run a query within a React component, call `useIsSubcribedNotificationForStreamerQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsSubcribedNotificationForStreamerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsSubcribedNotificationForStreamerQuery({
 *   variables: {
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useIsSubcribedNotificationForStreamerQuery(
  baseOptions: Apollo.QueryHookOptions<
    IsSubcribedNotificationForStreamerQuery,
    IsSubcribedNotificationForStreamerQueryVariables
  > &
    (
      | {
          variables: IsSubcribedNotificationForStreamerQueryVariables
          skip?: boolean
        }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    IsSubcribedNotificationForStreamerQuery,
    IsSubcribedNotificationForStreamerQueryVariables
  >(IsSubcribedNotificationForStreamerDocument, options)
}
export function useIsSubcribedNotificationForStreamerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IsSubcribedNotificationForStreamerQuery,
    IsSubcribedNotificationForStreamerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    IsSubcribedNotificationForStreamerQuery,
    IsSubcribedNotificationForStreamerQueryVariables
  >(IsSubcribedNotificationForStreamerDocument, options)
}
export function useIsSubcribedNotificationForStreamerSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        IsSubcribedNotificationForStreamerQuery,
        IsSubcribedNotificationForStreamerQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    IsSubcribedNotificationForStreamerQuery,
    IsSubcribedNotificationForStreamerQueryVariables
  >(IsSubcribedNotificationForStreamerDocument, options)
}
export type IsSubcribedNotificationForStreamerQueryHookResult = ReturnType<
  typeof useIsSubcribedNotificationForStreamerQuery
>
export type IsSubcribedNotificationForStreamerLazyQueryHookResult = ReturnType<
  typeof useIsSubcribedNotificationForStreamerLazyQuery
>
export type IsSubcribedNotificationForStreamerSuspenseQueryHookResult =
  ReturnType<typeof useIsSubcribedNotificationForStreamerSuspenseQuery>
export type IsSubcribedNotificationForStreamerQueryResult = Apollo.QueryResult<
  IsSubcribedNotificationForStreamerQuery,
  IsSubcribedNotificationForStreamerQueryVariables
>
export const IsVerifiedDocument = gql`
  query IsVerified($profileIds: [String]) {
    isVerified(profileIds: $profileIds) {
      isVerified
      profileId
    }
  }
`

/**
 * __useIsVerifiedQuery__
 *
 * To run a query within a React component, call `useIsVerifiedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsVerifiedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsVerifiedQuery({
 *   variables: {
 *      profileIds: // value for 'profileIds'
 *   },
 * });
 */
export function useIsVerifiedQuery(
  baseOptions?: Apollo.QueryHookOptions<
    IsVerifiedQuery,
    IsVerifiedQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IsVerifiedQuery, IsVerifiedQueryVariables>(
    IsVerifiedDocument,
    options
  )
}
export function useIsVerifiedLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    IsVerifiedQuery,
    IsVerifiedQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IsVerifiedQuery, IsVerifiedQueryVariables>(
    IsVerifiedDocument,
    options
  )
}
export function useIsVerifiedSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<IsVerifiedQuery, IsVerifiedQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<IsVerifiedQuery, IsVerifiedQueryVariables>(
    IsVerifiedDocument,
    options
  )
}
export type IsVerifiedQueryHookResult = ReturnType<typeof useIsVerifiedQuery>
export type IsVerifiedLazyQueryHookResult = ReturnType<
  typeof useIsVerifiedLazyQuery
>
export type IsVerifiedSuspenseQueryHookResult = ReturnType<
  typeof useIsVerifiedSuspenseQuery
>
export type IsVerifiedQueryResult = Apollo.QueryResult<
  IsVerifiedQuery,
  IsVerifiedQueryVariables
>
export const LiveStreamersDocument = gql`
  query LiveStreamers {
    liveStreamers {
      profileId
      streamName
      lastSeen
      isActive
      createdAt
      playbackId
      thumbnail
      liveCount
      premium
    }
  }
`

/**
 * __useLiveStreamersQuery__
 *
 * To run a query within a React component, call `useLiveStreamersQuery` and pass it any options that fit your needs.
 * When your component renders, `useLiveStreamersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiveStreamersQuery({
 *   variables: {
 *   },
 * });
 */
export function useLiveStreamersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LiveStreamersQuery,
    LiveStreamersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<LiveStreamersQuery, LiveStreamersQueryVariables>(
    LiveStreamersDocument,
    options
  )
}
export function useLiveStreamersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LiveStreamersQuery,
    LiveStreamersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<LiveStreamersQuery, LiveStreamersQueryVariables>(
    LiveStreamersDocument,
    options
  )
}
export function useLiveStreamersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        LiveStreamersQuery,
        LiveStreamersQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    LiveStreamersQuery,
    LiveStreamersQueryVariables
  >(LiveStreamersDocument, options)
}
export type LiveStreamersQueryHookResult = ReturnType<
  typeof useLiveStreamersQuery
>
export type LiveStreamersLazyQueryHookResult = ReturnType<
  typeof useLiveStreamersLazyQuery
>
export type LiveStreamersSuspenseQueryHookResult = ReturnType<
  typeof useLiveStreamersSuspenseQuery
>
export type LiveStreamersQueryResult = Apollo.QueryResult<
  LiveStreamersQuery,
  LiveStreamersQueryVariables
>
export const MyStreamDocument = gql`
  query MyStream {
    myStream {
      profileId
      streamName
      streamDescription
      lastSeen
      playbackId
      streamKey
      isActive
      latestSessionId
      latestSessionCreatedAt
      premium
      isHealthy
      issues
      nextStreamTime
      featuredCoin {
        type
        coinAddress
        chainId
      }
    }
  }
`

/**
 * __useMyStreamQuery__
 *
 * To run a query within a React component, call `useMyStreamQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyStreamQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyStreamQuery(
  baseOptions?: Apollo.QueryHookOptions<MyStreamQuery, MyStreamQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyStreamQuery, MyStreamQueryVariables>(
    MyStreamDocument,
    options
  )
}
export function useMyStreamLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyStreamQuery,
    MyStreamQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyStreamQuery, MyStreamQueryVariables>(
    MyStreamDocument,
    options
  )
}
export function useMyStreamSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MyStreamQuery, MyStreamQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<MyStreamQuery, MyStreamQueryVariables>(
    MyStreamDocument,
    options
  )
}
export type MyStreamQueryHookResult = ReturnType<typeof useMyStreamQuery>
export type MyStreamLazyQueryHookResult = ReturnType<
  typeof useMyStreamLazyQuery
>
export type MyStreamSuspenseQueryHookResult = ReturnType<
  typeof useMyStreamSuspenseQuery
>
export type MyStreamQueryResult = Apollo.QueryResult<
  MyStreamQuery,
  MyStreamQueryVariables
>
export const OfflineStreamersDocument = gql`
  query OfflineStreamers {
    offlineStreamers {
      profileId
      lastSeen
      premium
      nextStreamTime
    }
  }
`

/**
 * __useOfflineStreamersQuery__
 *
 * To run a query within a React component, call `useOfflineStreamersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfflineStreamersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfflineStreamersQuery({
 *   variables: {
 *   },
 * });
 */
export function useOfflineStreamersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    OfflineStreamersQuery,
    OfflineStreamersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<OfflineStreamersQuery, OfflineStreamersQueryVariables>(
    OfflineStreamersDocument,
    options
  )
}
export function useOfflineStreamersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    OfflineStreamersQuery,
    OfflineStreamersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    OfflineStreamersQuery,
    OfflineStreamersQueryVariables
  >(OfflineStreamersDocument, options)
}
export function useOfflineStreamersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        OfflineStreamersQuery,
        OfflineStreamersQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    OfflineStreamersQuery,
    OfflineStreamersQueryVariables
  >(OfflineStreamersDocument, options)
}
export type OfflineStreamersQueryHookResult = ReturnType<
  typeof useOfflineStreamersQuery
>
export type OfflineStreamersLazyQueryHookResult = ReturnType<
  typeof useOfflineStreamersLazyQuery
>
export type OfflineStreamersSuspenseQueryHookResult = ReturnType<
  typeof useOfflineStreamersSuspenseQuery
>
export type OfflineStreamersQueryResult = Apollo.QueryResult<
  OfflineStreamersQuery,
  OfflineStreamersQueryVariables
>
export const QueryDocument = gql`
  query Query {
    ping
  }
`

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<QueryQuery, QueryQueryVariables>(
    QueryDocument,
    options
  )
}
export function useQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(
    QueryDocument,
    options
  )
}
export function useQuerySuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<QueryQuery, QueryQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<QueryQuery, QueryQueryVariables>(
    QueryDocument,
    options
  )
}
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>
export type QuerySuspenseQueryHookResult = ReturnType<
  typeof useQuerySuspenseQuery
>
export type QueryQueryResult = Apollo.QueryResult<
  QueryQuery,
  QueryQueryVariables
>
export const RemoveNotificationSubscriberFromStreamerDocument = gql`
  mutation RemoveNotificationSubscriberFromStreamer($profileId: String!) {
    removeNotificationSubscriberFromStreamer(profileId: $profileId)
  }
`
export type RemoveNotificationSubscriberFromStreamerMutationFn =
  Apollo.MutationFunction<
    RemoveNotificationSubscriberFromStreamerMutation,
    RemoveNotificationSubscriberFromStreamerMutationVariables
  >

/**
 * __useRemoveNotificationSubscriberFromStreamerMutation__
 *
 * To run a mutation, you first call `useRemoveNotificationSubscriberFromStreamerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveNotificationSubscriberFromStreamerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeNotificationSubscriberFromStreamerMutation, { data, loading, error }] = useRemoveNotificationSubscriberFromStreamerMutation({
 *   variables: {
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useRemoveNotificationSubscriberFromStreamerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveNotificationSubscriberFromStreamerMutation,
    RemoveNotificationSubscriberFromStreamerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RemoveNotificationSubscriberFromStreamerMutation,
    RemoveNotificationSubscriberFromStreamerMutationVariables
  >(RemoveNotificationSubscriberFromStreamerDocument, options)
}
export type RemoveNotificationSubscriberFromStreamerMutationHookResult =
  ReturnType<typeof useRemoveNotificationSubscriberFromStreamerMutation>
export type RemoveNotificationSubscriberFromStreamerMutationResult =
  Apollo.MutationResult<RemoveNotificationSubscriberFromStreamerMutation>
export type RemoveNotificationSubscriberFromStreamerMutationOptions =
  Apollo.BaseMutationOptions<
    RemoveNotificationSubscriberFromStreamerMutation,
    RemoveNotificationSubscriberFromStreamerMutationVariables
  >
export const StreamReplayRecordingDocument = gql`
  query StreamReplayRecording(
    $publicationId: String
    $profileId: String
    $sessionId: String
  ) {
    streamReplayRecording(
      publicationId: $publicationId
      profileId: $profileId
      sessionId: $sessionId
    ) {
      publicationId
      recordingUrl
      premium
      createdAt
      sessionId
      profileId
    }
  }
`

/**
 * __useStreamReplayRecordingQuery__
 *
 * To run a query within a React component, call `useStreamReplayRecordingQuery` and pass it any options that fit your needs.
 * When your component renders, `useStreamReplayRecordingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStreamReplayRecordingQuery({
 *   variables: {
 *      publicationId: // value for 'publicationId'
 *      profileId: // value for 'profileId'
 *      sessionId: // value for 'sessionId'
 *   },
 * });
 */
export function useStreamReplayRecordingQuery(
  baseOptions?: Apollo.QueryHookOptions<
    StreamReplayRecordingQuery,
    StreamReplayRecordingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    StreamReplayRecordingQuery,
    StreamReplayRecordingQueryVariables
  >(StreamReplayRecordingDocument, options)
}
export function useStreamReplayRecordingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StreamReplayRecordingQuery,
    StreamReplayRecordingQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    StreamReplayRecordingQuery,
    StreamReplayRecordingQueryVariables
  >(StreamReplayRecordingDocument, options)
}
export function useStreamReplayRecordingSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        StreamReplayRecordingQuery,
        StreamReplayRecordingQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    StreamReplayRecordingQuery,
    StreamReplayRecordingQueryVariables
  >(StreamReplayRecordingDocument, options)
}
export type StreamReplayRecordingQueryHookResult = ReturnType<
  typeof useStreamReplayRecordingQuery
>
export type StreamReplayRecordingLazyQueryHookResult = ReturnType<
  typeof useStreamReplayRecordingLazyQuery
>
export type StreamReplayRecordingSuspenseQueryHookResult = ReturnType<
  typeof useStreamReplayRecordingSuspenseQuery
>
export type StreamReplayRecordingQueryResult = Apollo.QueryResult<
  StreamReplayRecordingQuery,
  StreamReplayRecordingQueryVariables
>
export const ShouldCreateNewPostDocument = gql`
  query ShouldCreateNewPost {
    shouldCreateNewPost
  }
`

/**
 * __useShouldCreateNewPostQuery__
 *
 * To run a query within a React component, call `useShouldCreateNewPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useShouldCreateNewPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShouldCreateNewPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useShouldCreateNewPostQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ShouldCreateNewPostQuery,
    ShouldCreateNewPostQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    ShouldCreateNewPostQuery,
    ShouldCreateNewPostQueryVariables
  >(ShouldCreateNewPostDocument, options)
}
export function useShouldCreateNewPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ShouldCreateNewPostQuery,
    ShouldCreateNewPostQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ShouldCreateNewPostQuery,
    ShouldCreateNewPostQueryVariables
  >(ShouldCreateNewPostDocument, options)
}
export function useShouldCreateNewPostSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ShouldCreateNewPostQuery,
        ShouldCreateNewPostQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    ShouldCreateNewPostQuery,
    ShouldCreateNewPostQueryVariables
  >(ShouldCreateNewPostDocument, options)
}
export type ShouldCreateNewPostQueryHookResult = ReturnType<
  typeof useShouldCreateNewPostQuery
>
export type ShouldCreateNewPostLazyQueryHookResult = ReturnType<
  typeof useShouldCreateNewPostLazyQuery
>
export type ShouldCreateNewPostSuspenseQueryHookResult = ReturnType<
  typeof useShouldCreateNewPostSuspenseQuery
>
export type ShouldCreateNewPostQueryResult = Apollo.QueryResult<
  ShouldCreateNewPostQuery,
  ShouldCreateNewPostQueryVariables
>
export const StreamChatsDocument = gql`
  query StreamChats($profileId: String!) {
    streamChats(profileId: $profileId) {
      content
      handle
      avatarUrl
      profileId
      id
      createdAt
      txHash
      formattedAmount
      currencySymbol
      authorProfileId
      contentType
      clipPostId
      image
      content
    }
  }
`

/**
 * __useStreamChatsQuery__
 *
 * To run a query within a React component, call `useStreamChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStreamChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStreamChatsQuery({
 *   variables: {
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useStreamChatsQuery(
  baseOptions: Apollo.QueryHookOptions<
    StreamChatsQuery,
    StreamChatsQueryVariables
  > &
    (
      | { variables: StreamChatsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StreamChatsQuery, StreamChatsQueryVariables>(
    StreamChatsDocument,
    options
  )
}
export function useStreamChatsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StreamChatsQuery,
    StreamChatsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StreamChatsQuery, StreamChatsQueryVariables>(
    StreamChatsDocument,
    options
  )
}
export function useStreamChatsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        StreamChatsQuery,
        StreamChatsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<StreamChatsQuery, StreamChatsQueryVariables>(
    StreamChatsDocument,
    options
  )
}
export type StreamChatsQueryHookResult = ReturnType<typeof useStreamChatsQuery>
export type StreamChatsLazyQueryHookResult = ReturnType<
  typeof useStreamChatsLazyQuery
>
export type StreamChatsSuspenseQueryHookResult = ReturnType<
  typeof useStreamChatsSuspenseQuery
>
export type StreamChatsQueryResult = Apollo.QueryResult<
  StreamChatsQuery,
  StreamChatsQueryVariables
>
export const StreamReplayPublicationsDocument = gql`
  query StreamReplayPublications($skip: Int, $profileId: String) {
    streamReplayPublications(skip: $skip, profileId: $profileId) {
      streamReplayPublications {
        publicationId
        thumbnail
        sourceSegmentsDuration
        premium
        createdAt
        sessionId
        profileId
      }
      next
      hasMore
    }
  }
`

/**
 * __useStreamReplayPublicationsQuery__
 *
 * To run a query within a React component, call `useStreamReplayPublicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStreamReplayPublicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStreamReplayPublicationsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useStreamReplayPublicationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    StreamReplayPublicationsQuery,
    StreamReplayPublicationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    StreamReplayPublicationsQuery,
    StreamReplayPublicationsQueryVariables
  >(StreamReplayPublicationsDocument, options)
}
export function useStreamReplayPublicationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StreamReplayPublicationsQuery,
    StreamReplayPublicationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    StreamReplayPublicationsQuery,
    StreamReplayPublicationsQueryVariables
  >(StreamReplayPublicationsDocument, options)
}
export function useStreamReplayPublicationsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        StreamReplayPublicationsQuery,
        StreamReplayPublicationsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    StreamReplayPublicationsQuery,
    StreamReplayPublicationsQueryVariables
  >(StreamReplayPublicationsDocument, options)
}
export type StreamReplayPublicationsQueryHookResult = ReturnType<
  typeof useStreamReplayPublicationsQuery
>
export type StreamReplayPublicationsLazyQueryHookResult = ReturnType<
  typeof useStreamReplayPublicationsLazyQuery
>
export type StreamReplayPublicationsSuspenseQueryHookResult = ReturnType<
  typeof useStreamReplayPublicationsSuspenseQuery
>
export type StreamReplayPublicationsQueryResult = Apollo.QueryResult<
  StreamReplayPublicationsQuery,
  StreamReplayPublicationsQueryVariables
>
export const StreamerDocument = gql`
  query Streamer($profileId: String!) {
    streamer(profileId: $profileId) {
      profileId
      lastSeen
      isActive
      createdAt
      playbackId
      streamName
      streamDescription
      latestStreamPublicationId
      latestSessionId
      latestSessionCreatedAt
      nextStreamTime
      premium
      featuredCoin {
        type
        coinAddress
        chainId
      }
    }
  }
`

/**
 * __useStreamerQuery__
 *
 * To run a query within a React component, call `useStreamerQuery` and pass it any options that fit your needs.
 * When your component renders, `useStreamerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStreamerQuery({
 *   variables: {
 *      profileId: // value for 'profileId'
 *   },
 * });
 */
export function useStreamerQuery(
  baseOptions: Apollo.QueryHookOptions<StreamerQuery, StreamerQueryVariables> &
    ({ variables: StreamerQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StreamerQuery, StreamerQueryVariables>(
    StreamerDocument,
    options
  )
}
export function useStreamerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StreamerQuery,
    StreamerQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StreamerQuery, StreamerQueryVariables>(
    StreamerDocument,
    options
  )
}
export function useStreamerSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<StreamerQuery, StreamerQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<StreamerQuery, StreamerQueryVariables>(
    StreamerDocument,
    options
  )
}
export type StreamerQueryHookResult = ReturnType<typeof useStreamerQuery>
export type StreamerLazyQueryHookResult = ReturnType<
  typeof useStreamerLazyQuery
>
export type StreamerSuspenseQueryHookResult = ReturnType<
  typeof useStreamerSuspenseQuery
>
export type StreamerQueryResult = Apollo.QueryResult<
  StreamerQuery,
  StreamerQueryVariables
>
export const ThumbnailDocument = gql`
  query Thumbnail($handle: String!) {
    thumbnail(handle: $handle)
  }
`

/**
 * __useThumbnailQuery__
 *
 * To run a query within a React component, call `useThumbnailQuery` and pass it any options that fit your needs.
 * When your component renders, `useThumbnailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThumbnailQuery({
 *   variables: {
 *      handle: // value for 'handle'
 *   },
 * });
 */
export function useThumbnailQuery(
  baseOptions: Apollo.QueryHookOptions<
    ThumbnailQuery,
    ThumbnailQueryVariables
  > &
    ({ variables: ThumbnailQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ThumbnailQuery, ThumbnailQueryVariables>(
    ThumbnailDocument,
    options
  )
}
export function useThumbnailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ThumbnailQuery,
    ThumbnailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ThumbnailQuery, ThumbnailQueryVariables>(
    ThumbnailDocument,
    options
  )
}
export function useThumbnailSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<ThumbnailQuery, ThumbnailQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ThumbnailQuery, ThumbnailQueryVariables>(
    ThumbnailDocument,
    options
  )
}
export type ThumbnailQueryHookResult = ReturnType<typeof useThumbnailQuery>
export type ThumbnailLazyQueryHookResult = ReturnType<
  typeof useThumbnailLazyQuery
>
export type ThumbnailSuspenseQueryHookResult = ReturnType<
  typeof useThumbnailSuspenseQuery
>
export type ThumbnailQueryResult = Apollo.QueryResult<
  ThumbnailQuery,
  ThumbnailQueryVariables
>
export const TokenPriceDocument = gql`
  query TokenPrice($address: String!) {
    tokenPrice(address: $address) {
      usdPrice
      usdPriceFormatted
      DayPercentChange
    }
  }
`

/**
 * __useTokenPriceQuery__
 *
 * To run a query within a React component, call `useTokenPriceQuery` and pass it any options that fit your needs.
 * When your component renders, `useTokenPriceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTokenPriceQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useTokenPriceQuery(
  baseOptions: Apollo.QueryHookOptions<
    TokenPriceQuery,
    TokenPriceQueryVariables
  > &
    (
      | { variables: TokenPriceQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TokenPriceQuery, TokenPriceQueryVariables>(
    TokenPriceDocument,
    options
  )
}
export function useTokenPriceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TokenPriceQuery,
    TokenPriceQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TokenPriceQuery, TokenPriceQueryVariables>(
    TokenPriceDocument,
    options
  )
}
export function useTokenPriceSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<TokenPriceQuery, TokenPriceQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<TokenPriceQuery, TokenPriceQueryVariables>(
    TokenPriceDocument,
    options
  )
}
export type TokenPriceQueryHookResult = ReturnType<typeof useTokenPriceQuery>
export type TokenPriceLazyQueryHookResult = ReturnType<
  typeof useTokenPriceLazyQuery
>
export type TokenPriceSuspenseQueryHookResult = ReturnType<
  typeof useTokenPriceSuspenseQuery
>
export type TokenPriceQueryResult = Apollo.QueryResult<
  TokenPriceQuery,
  TokenPriceQueryVariables
>
export const UpdateLensStreamSessionDocument = gql`
  mutation UpdateLensStreamSession(
    $sessionId: String!
    $viewType: ViewType
    $customThumbnail: String
  ) {
    updateLensStreamSession(
      sessionId: $sessionId
      viewType: $viewType
      customThumbnail: $customThumbnail
    )
  }
`
export type UpdateLensStreamSessionMutationFn = Apollo.MutationFunction<
  UpdateLensStreamSessionMutation,
  UpdateLensStreamSessionMutationVariables
>

/**
 * __useUpdateLensStreamSessionMutation__
 *
 * To run a mutation, you first call `useUpdateLensStreamSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLensStreamSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLensStreamSessionMutation, { data, loading, error }] = useUpdateLensStreamSessionMutation({
 *   variables: {
 *      sessionId: // value for 'sessionId'
 *      viewType: // value for 'viewType'
 *      customThumbnail: // value for 'customThumbnail'
 *   },
 * });
 */
export function useUpdateLensStreamSessionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateLensStreamSessionMutation,
    UpdateLensStreamSessionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateLensStreamSessionMutation,
    UpdateLensStreamSessionMutationVariables
  >(UpdateLensStreamSessionDocument, options)
}
export type UpdateLensStreamSessionMutationHookResult = ReturnType<
  typeof useUpdateLensStreamSessionMutation
>
export type UpdateLensStreamSessionMutationResult =
  Apollo.MutationResult<UpdateLensStreamSessionMutation>
export type UpdateLensStreamSessionMutationOptions = Apollo.BaseMutationOptions<
  UpdateLensStreamSessionMutation,
  UpdateLensStreamSessionMutationVariables
>
export const UpdateMyStreamDocument = gql`
  mutation UpdateMyStream($request: UpdateStreamRequest!) {
    updateMyStream(request: $request)
  }
`
export type UpdateMyStreamMutationFn = Apollo.MutationFunction<
  UpdateMyStreamMutation,
  UpdateMyStreamMutationVariables
>

/**
 * __useUpdateMyStreamMutation__
 *
 * To run a mutation, you first call `useUpdateMyStreamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyStreamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyStreamMutation, { data, loading, error }] = useUpdateMyStreamMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateMyStreamMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMyStreamMutation,
    UpdateMyStreamMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateMyStreamMutation,
    UpdateMyStreamMutationVariables
  >(UpdateMyStreamDocument, options)
}
export type UpdateMyStreamMutationHookResult = ReturnType<
  typeof useUpdateMyStreamMutation
>
export type UpdateMyStreamMutationResult =
  Apollo.MutationResult<UpdateMyStreamMutation>
export type UpdateMyStreamMutationOptions = Apollo.BaseMutationOptions<
  UpdateMyStreamMutation,
  UpdateMyStreamMutationVariables
>
export const UploadDataToArDocument = gql`
  mutation UploadDataToAR($data: String!) {
    uploadDataToAR(data: $data)
  }
`
export type UploadDataToArMutationFn = Apollo.MutationFunction<
  UploadDataToArMutation,
  UploadDataToArMutationVariables
>

/**
 * __useUploadDataToArMutation__
 *
 * To run a mutation, you first call `useUploadDataToArMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadDataToArMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadDataToArMutation, { data, loading, error }] = useUploadDataToArMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUploadDataToArMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UploadDataToArMutation,
    UploadDataToArMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UploadDataToArMutation,
    UploadDataToArMutationVariables
  >(UploadDataToArDocument, options)
}
export type UploadDataToArMutationHookResult = ReturnType<
  typeof useUploadDataToArMutation
>
export type UploadDataToArMutationResult =
  Apollo.MutationResult<UploadDataToArMutation>
export type UploadDataToArMutationOptions = Apollo.BaseMutationOptions<
  UploadDataToArMutation,
  UploadDataToArMutationVariables
>
export const UploadDataToIpfsDocument = gql`
  mutation UploadDataToIpfs($data: String!) {
    uploadDataToIpfs(data: $data) {
      cid
      size
    }
  }
`
export type UploadDataToIpfsMutationFn = Apollo.MutationFunction<
  UploadDataToIpfsMutation,
  UploadDataToIpfsMutationVariables
>

/**
 * __useUploadDataToIpfsMutation__
 *
 * To run a mutation, you first call `useUploadDataToIpfsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadDataToIpfsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadDataToIpfsMutation, { data, loading, error }] = useUploadDataToIpfsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUploadDataToIpfsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UploadDataToIpfsMutation,
    UploadDataToIpfsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UploadDataToIpfsMutation,
    UploadDataToIpfsMutationVariables
  >(UploadDataToIpfsDocument, options)
}
export type UploadDataToIpfsMutationHookResult = ReturnType<
  typeof useUploadDataToIpfsMutation
>
export type UploadDataToIpfsMutationResult =
  Apollo.MutationResult<UploadDataToIpfsMutation>
export type UploadDataToIpfsMutationOptions = Apollo.BaseMutationOptions<
  UploadDataToIpfsMutation,
  UploadDataToIpfsMutationVariables
>

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    Stream: ['MyStream', 'SingleStreamer', 'Streamer']
  }
}
export default result
